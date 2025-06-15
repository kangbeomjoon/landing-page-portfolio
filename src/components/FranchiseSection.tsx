"use client";

import { useState, useEffect, useRef } from "react";
import {
  CheckCircle,
  DollarSign,
  TrendingUp,
  Users,
  MapPin,
  Phone,
  Mail,
  User,
} from "lucide-react";

const FranchiseSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    budget: "",
    experience: "",
  });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 폼 유효성 검사
    if (!formData.name || !formData.phone || !formData.email) {
      alert("필수 항목을 모두 입력해주세요.");
      return;
    }

    // Toast 메시지 표시 (실제 데이터 전송은 하지 않음)
    setShowToast(true);

    // 폼 초기화
    setFormData({
      name: "",
      phone: "",
      email: "",
      location: "",
      budget: "",
      experience: "",
    });

    // 3초 후 Toast 숨기기
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const benefits = [
    {
      icon: DollarSign,
      title: "낮은 초기 투자비",
      description: "합리적인 가맹비와 인테리어 비용으로 부담 없는 창업",
      detail: "가맹비 1,500만원",
    },
    {
      icon: TrendingUp,
      title: "검증된 수익성",
      description: "전국 150+ 매장의 평균 월 매출 8,000만원 달성",
      detail: "평균 회수기간 18개월",
    },
    {
      icon: Users,
      title: "체계적인 교육",
      description: "본사 직영 교육센터에서 4주간 집중 교육 프로그램",
      detail: "운영/조리/마케팅 전문 교육",
    },
    {
      icon: MapPin,
      title: "입지 컨설팅",
      description: "전문 상권 분석팀의 최적 입지 선정 및 상권 분석",
      detail: "무료 상권분석 서비스",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="franchise"
      className="py-20 bg-white relative"
    >
      {/* Toast 알림 */}
      {showToast && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center animate-slide-in-right">
          <CheckCircle size={20} className="mr-2" />
          성공적으로 문의가 접수되었습니다!
        </div>
      )}

      <div className="container-max section-padding">
        {/* 섹션 헤더 */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            FRANCHISE
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            검증된 브랜드와 함께 성공적인 창업을 시작하세요
          </p>
        </div>

        {/* 가맹 혜택 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`text-center p-6 rounded-xl bg-gray-50 hover:bg-primary hover:text-white transition-all duration-500 transform hover:scale-105 group ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary text-white rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-colors duration-300">
                <benefit.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300 mb-2">
                {benefit.description}
              </p>
              <div className="text-sm font-semibold text-primary group-hover:text-secondary transition-colors duration-300">
                {benefit.detail}
              </div>
            </div>
          ))}
        </div>

        {/* 가맹 문의 폼 */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* 문의 정보 */}
          <div
            className={`transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              가맹 문의하기
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              KEBAB HOUSE와 함께 성공적인 창업을 시작하세요. 전문 상담사가
              친절하게 안내해드립니다.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="text-primary" size={20} />
                <span className="text-gray-700">대표전화: 1588-0000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-primary" size={20} />
                <span className="text-gray-700">
                  franchise@kebabhouse.co.kr
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-primary" size={20} />
                <span className="text-gray-700">
                  서울시 강남구 테헤란로 123
                </span>
              </div>
            </div>
          </div>

          {/* 문의 폼 */}
          <div
            className={`bg-gray-50 p-8 rounded-2xl transition-all duration-1000 delay-900 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  이름 *
                </label>
                <div className="relative">
                  <User
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="성함을 입력해주세요"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  연락처 *
                </label>
                <div className="relative">
                  <Phone
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="010-0000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  이메일 *
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <button type="submit" className="w-full btn-primary text-lg py-4">
                가맹 문의하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseSection;
