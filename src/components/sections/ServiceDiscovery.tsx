'use client';

import React, { useMemo, useState } from 'react';
import { FiArrowLeft, FiArrowRight, FiCheckCircle, FiFileText } from 'react-icons/fi';
import { FaBuilding, FaCalculator } from 'react-icons/fa';

type QuestionType = 'single' | 'multiple';

type QuestionOption = {
  value: string;
  label: string;
  icon: string;
};

type AnswerMap = Record<string, string | string[] | undefined>;

type Question = {
  id: string;
  question: string;
  type: QuestionType;
  options: QuestionOption[];
  condition?: (answers: AnswerMap) => boolean;
};

type Recommendation = {
  services: string[];
  urgency: string[];
  package_type: 'startup' | 'enterprise' | 'urgent' | 'standard' | 'individual';
  estimated_setup: string;
  next_steps: string[];
};

export type ServiceDiscoveryProps = {
  heading?: string;
  subheading?: string;
  contactNumber?: string;
  onBookConsultation?: () => void;
  className?: string;
  variant?: 'page' | 'modal';
};

const questions: Question[] = [
  {
    id: 'business_stage',
    question: 'What best describes your current situation?',
    type: 'single',
    options: [
      { value: 'planning', label: 'Planning to start a business', icon: '💡' },
      { value: 'new', label: 'Business less than 1 year old', icon: '🌱' },
      { value: 'established', label: 'Established business (1+ years)', icon: '🏢' },
      { value: 'individual', label: 'Individual/Employee needing tax help', icon: '👤' },
    ],
  },
  {
    id: 'registration_status',
    question: 'Are you registered with KRA?',
    type: 'single',
    condition: (ans) => ans.business_stage !== 'individual',
    options: [
      { value: 'no_pin', label: 'No KRA PIN yet', icon: '❌' },
      { value: 'pin_only', label: 'Have PIN, no business registration', icon: '📝' },
      { value: 'registered', label: 'Fully registered with KRA', icon: '✅' },
      { value: 'unsure', label: 'Not sure', icon: '🤔' },
    ],
  },
  {
    id: 'revenue_level',
    question: 'What is your annual revenue/turnover?',
    type: 'single',
    condition: (ans) => ans.business_stage !== 'planning',
    options: [
      { value: 'under_1m', label: 'Under KES 1 million', icon: '💰' },
      { value: '1m_5m', label: 'KES 1-5 million', icon: '💵' },
      { value: '5m_50m', label: 'KES 5-50 million', icon: '💸' },
      { value: 'over_50m', label: 'Over KES 50 million', icon: '🏦' },
    ],
  },
  {
    id: 'compliance_issues',
    question: 'Are you experiencing any of these issues?',
    type: 'multiple',
    options: [
      { value: 'missed_deadlines', label: 'Missed tax filing deadlines', icon: '⏰' },
      { value: 'penalties', label: 'Have KRA penalties/notices', icon: '⚠️' },
      { value: 'no_records', label: 'Poor or no bookkeeping records', icon: '📚' },
      { value: 'audit_notice', label: 'Received audit notice from KRA', icon: '🔍' },
      { value: 'etims_issues', label: 'eTIMS setup/integration problems', icon: '💻' },
      { value: 'none', label: 'None of these', icon: '✨' },
    ],
  },
  {
    id: 'employees',
    question: 'Do you have employees?',
    type: 'single',
    condition: (ans) => ans.business_stage !== 'individual' && ans.business_stage !== 'planning',
    options: [
      { value: 'no', label: 'No employees', icon: '👤' },
      { value: '1_5', label: '1-5 employees', icon: '👥' },
      { value: '6_20', label: '6-20 employees', icon: '👨‍👩‍👧‍👦' },
      { value: 'over_20', label: 'Over 20 employees', icon: '🏢' },
    ],
  },
  {
    id: 'services_needed',
    question: 'What services are you most interested in?',
    type: 'multiple',
    options: [
      { value: 'registration', label: 'Business registration & KRA setup', icon: '📋' },
      { value: 'bookkeeping', label: 'Monthly bookkeeping', icon: '📊' },
      { value: 'tax_filing', label: 'Tax return filing', icon: '📝' },
      { value: 'payroll', label: 'Payroll management', icon: '💳' },
      { value: 'audit', label: 'Audit services', icon: '🔍' },
      { value: 'consultation', label: 'Tax planning & consultation', icon: '💡' },
      { value: 'unsure', label: 'Not sure, need advice', icon: '🤷' },
    ],
  },
];

const getNextSteps = (package_type: Recommendation['package_type'], hasUrgency: boolean) => {
  if (hasUrgency) {
    return [
      'Schedule urgent consultation (within 24 hours)',
      'Gather all available tax documents',
      'Prepare timeline of compliance issues',
    ];
  }

  if (package_type === 'startup') {
    return [
      'Book free 30-minute consultation',
      'Prepare business details and ID documents',
      'Discuss business structure options',
    ];
  }

  if (package_type === 'enterprise') {
    return [
      'Schedule comprehensive business review',
      'Prepare financial statements for review',
      'Discuss custom service package',
    ];
  }

  return [
    'Schedule consultation with tax advisor',
    'Prepare recent tax documents',
    'Discuss monthly retainer options',
  ];
};

const getRecommendation = (answers: AnswerMap): Recommendation => {
  const services: string[] = [];
  const urgency: string[] = [];
  let package_type: Recommendation['package_type'] = 'standard';

  if (answers.business_stage === 'planning') {
    services.push('Business Registration Package', 'Tax Planning Consultation');
    package_type = 'startup';
  }

  if (answers.business_stage === 'new') {
    services.push('Startup Compliance Package', 'Bookkeeping Setup');
    package_type = 'startup';
  }

  if (answers.registration_status === 'no_pin' || answers.registration_status === 'pin_only') {
    services.push('KRA Registration & Setup');
    urgency.push('Get registered to avoid penalties');
  }

  if (answers.revenue_level === '5m_50m' || answers.revenue_level === 'over_50m') {
    services.push('Monthly Bookkeeping', 'Quarterly Tax Planning');
    if (answers.revenue_level === 'over_50m') {
      services.push('Statutory Audit');
      package_type = 'enterprise';
    }
  }

  const complianceSelections = Array.isArray(answers.compliance_issues)
    ? answers.compliance_issues
    : [];

  if (complianceSelections.includes('missed_deadlines')) {
    urgency.push('Catch up on overdue returns immediately');
    services.push('Tax Compliance Catchup');
  }

  if (complianceSelections.includes('penalties')) {
    urgency.push('Penalty waiver application');
    services.push('KRA Penalty Mitigation');
  }

  if (complianceSelections.includes('no_records')) {
    urgency.push('Bookkeeping reconstruction needed');
    services.push('Books Cleanup & Reconstruction');
  }

  if (complianceSelections.includes('audit_notice')) {
    urgency.push('URGENT: KRA Audit Representation');
    services.push('Audit Defense & Representation');
    package_type = 'urgent';
  }

  if (complianceSelections.includes('etims_issues')) {
    services.push('eTIMS Setup & Integration');
  }

  if (answers.employees && answers.employees !== 'no') {
    services.push('Payroll Processing', 'PAYE, NSSF & NHIF Management');
  }

  if (answers.revenue_level === '5m_50m' || answers.revenue_level === 'over_50m') {
    services.push('VAT Registration & Compliance');
  }

  if (answers.business_stage === 'individual') {
    services.push('Personal Tax Return Filing', 'Tax Refund Application');
    package_type = 'individual';
  }

  const dedupedServices = [...new Set(services)];

  return {
    services: dedupedServices,
    urgency,
    package_type,
    estimated_setup:
      package_type === 'urgent'
        ? '1-3 days'
        : package_type === 'startup'
        ? '1-2 weeks'
        : '3-5 days',
    next_steps: getNextSteps(package_type, urgency.length > 0),
  };
};

export default function ServiceDiscovery({
  heading = 'Find Your Perfect Tax Solution',
  subheading = 'Answer a few questions to discover the services you need',
  contactNumber = '+254 XXX XXX XXX',
  onBookConsultation,
  className = '',
  variant = 'page',
}: ServiceDiscoveryProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);

  const visibleQuestions = useMemo(() => {
    return questions.filter((question) => !question.condition || question.condition(answers));
  }, [answers]);

  const totalSteps = visibleQuestions.length;
  const currentQuestion = visibleQuestions[step];

  const handleAnswer = (questionId: string, value: string, isMultiple = false) => {
    setAnswers((prev) => {
      if (isMultiple) {
        const current = Array.isArray(prev[questionId]) ? (prev[questionId] as string[]) : [];
        const updated = current.includes(value)
          ? current.filter((val) => val !== value)
          : [...current, value];

        return { ...prev, [questionId]: updated };
      }

      return { ...prev, [questionId]: value };
    });
  };

  const goNext = () => {
    if (step < totalSteps - 1) {
      setStep((prev) => prev + 1);
    } else {
      setRecommendation(getRecommendation(answers));
    }
  };

  const goBack = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setRecommendation(null);
  };

  React.useEffect(() => {
    if (step > totalSteps - 1) {
      setStep(Math.max(totalSteps - 1, 0));
    }
  }, [step, totalSteps]);

  const canProceed = useMemo(() => {
    if (!currentQuestion) return false;

    const response = answers[currentQuestion.id];

    if (currentQuestion.type === 'multiple') {
      return Array.isArray(response) && response.length > 0;
    }

    return typeof response === 'string' && response.length > 0;
  }, [answers, currentQuestion]);

  if (!currentQuestion && !recommendation) {
    return null;
  }

  if (recommendation) {
    return (
      <div
        className={`${
          variant === 'page'
            ? 'min-h-screen'
            : 'rounded-3xl'
        } bg-gradient-to-br from-blue-50 to-indigo-100 p-4 ${variant === 'modal' ? 'max-h-[80vh] overflow-y-auto' : ''} ${className}`}
      >
        <div className={`max-w-4xl mx-auto ${variant === 'page' ? 'pt-8' : 'pt-4'}`}>
          <div className={`bg-white rounded-2xl shadow-2xl ${variant === 'page' ? 'p-8' : 'p-6 md:p-8'}`}>
            <div className="text-center mb-8">
              <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                <FiCheckCircle className="w-16 h-16 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Your Personalized Service Recommendation
              </h2>
              <p className="text-gray-600">
                Based on your responses, here's what Avenue Tax Audit Associates recommends
              </p>
            </div>

            {recommendation.urgency.length > 0 && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                <h3 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                  <span>⚠️</span> Urgent Action Required
                </h3>
                <ul className="space-y-1">
                  {recommendation.urgency.map((item, idx) => (
                    <li key={idx} className="text-red-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaCalculator className="w-6 h-6" />
                Recommended Services
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {recommendation.services.map((service, idx) => (
                  <div key={idx} className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <p className="font-semibold text-blue-900">{service}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FiFileText className="w-6 h-6" />
                Next Steps
              </h3>
              <ol className="space-y-3">
                {recommendation.next_steps.map((stepText, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {idx + 1}
                    </span>
                    <span className="text-gray-700">{stepText}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-indigo-50 p-6 rounded-lg mb-6">
              <div className="flex items-start gap-4">
                <FaBuilding className="w-8 h-8 text-indigo-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-indigo-900 mb-2">
                    Package Type: <span className="capitalize">{recommendation.package_type}</span>
                  </h3>
                  <p className="text-indigo-800 mb-2">
                    Estimated setup time: <strong>{recommendation.estimated_setup}</strong>
                  </p>
                  <p className="text-indigo-700 text-sm">
                    Avenue Tax Audit Associates will customize a service package based on your specific needs and budget.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={reset}
                className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Start Over
              </button>
              <button
                onClick={onBookConsultation ?? (() => alert('This would redirect to contact/booking page'))}
                className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition flex items-center justify-center gap-2"
              >
                Book Consultation
                <FiArrowRight className="w-5 h-5" />
              </button>
            </div>

            <p className="text-center text-gray-500 text-sm mt-6">
              Questions? Call us or WhatsApp: <strong>{contactNumber}</strong>
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!currentQuestion) {
    return null;
  }

  return (
    <div
      className={`${
        variant === 'page'
          ? 'min-h-screen'
          : 'rounded-3xl'
      } bg-gradient-to-br from-blue-50 to-indigo-100 p-4 ${variant === 'modal' ? 'max-h-[80vh] overflow-y-auto' : ''} ${className}`}
    >
      <div className={`max-w-3xl mx-auto ${variant === 'page' ? 'pt-8' : 'pt-4'}`}>
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{heading}</h1>
          <p className="text-gray-600">{subheading}</p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              Question {step + 1} of {totalSteps}
            </span>
            <span className="text-sm font-medium text-gray-700">
              {Math.round(((step + 1) / totalSteps) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">{currentQuestion.question}</h2>

          <div className="space-y-3 mb-8">
            {currentQuestion.options.map((option) => {
              const response = answers[currentQuestion.id];
              const isSelected = currentQuestion.type === 'multiple'
                ? Array.isArray(response) && response.includes(option.value)
                : response === option.value;

              return (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(currentQuestion.id, option.value, currentQuestion.type === 'multiple')}
                  className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                    isSelected
                      ? 'border-indigo-600 bg-indigo-50'
                      : 'border-gray-200 hover:border-indigo-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{option.icon}</span>
                    <span className={`font-medium ${isSelected ? 'text-indigo-900' : 'text-gray-700'}`}>
                      {option.label}
                    </span>
                    {isSelected && currentQuestion.type === 'multiple' && (
                      <FiCheckCircle className="w-5 h-5 text-indigo-600 ml-auto" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="flex gap-4">
            {step > 0 && (
              <button
                onClick={goBack}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition flex items-center gap-2"
              >
                <FiArrowLeft className="w-5 h-5" />
                Back
              </button>
            )}
            <button
              onClick={goNext}
              disabled={!canProceed}
              className={`flex-1 px-6 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2 ${
                canProceed
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {step === totalSteps - 1 ? 'Get Recommendations' : 'Next'}
              <FiArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">Powered by Avenue Tax Audit Associates</p>
      </div>
    </div>
  );
}
