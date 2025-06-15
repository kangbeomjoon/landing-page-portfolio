"use client";

import {
  Facebook,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Youtube, href: "#", name: "YouTube" },
  ];

  const quickLinks = [
    "브랜드 소개",
    "메뉴",
    "가맹 문의",
    "매장 찾기",
    "고객센터",
    "채용 정보",
  ];

  const footerInfo = [
    { icon: MapPin, text: "서울시 강남구 테헤란로 123, KEBAB HOUSE 본사" },
    { icon: Phone, text: "대표전화: 1588-0000 | 가맹문의: 1588-1111" },
    { icon: Mail, text: "info@kebabhouse.co.kr" },
    { icon: Clock, text: "상담시간: 평일 09:00~18:00 (주말 및 공휴일 휴무)" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        {/* 메인 푸터 컨텐츠 */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 py-16">
          {/* 브랜드 정보 */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4">KEBAB HOUSE</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              1973년부터 시작된 정통 터키 케밥의 전통을 이어가며, 전 세계
              고객들에게 최고의 케밥을 선사하는 프리미엄 브랜드입니다.
            </p>

            {/* 소셜 미디어 링크 */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 bg-primary hover:bg-primary/80 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>

            {/* 인증 마크들 */}
            <div className="flex items-center space-x-4">
              <div className="bg-gray-800 px-4 py-2 rounded-lg">
                <span className="text-sm font-semibold text-secondary">
                  ISO 9001
                </span>
              </div>
              <div className="bg-gray-800 px-4 py-2 rounded-lg">
                <span className="text-sm font-semibold text-secondary">
                  HACCP
                </span>
              </div>
              <div className="bg-gray-800 px-4 py-2 rounded-lg">
                <span className="text-sm font-semibold text-secondary">
                  할랄 인증
                </span>
              </div>
            </div>
          </div>

          {/* 퀵 링크 */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-secondary transition-colors duration-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 연락처 정보 */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              {footerInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <info.icon
                    className="text-primary flex-shrink-0 mt-1"
                    size={18}
                  />
                  <span className="text-gray-300 text-sm leading-relaxed">
                    {info.text}
                  </span>
                </div>
              ))}
            </div>

            {/* 뉴스레터 구독 */}
            <div className="mt-8">
              <h5 className="text-lg font-semibold mb-3">뉴스레터 구독</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="이메일 주소"
                  className="flex-1 px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-l-lg focus:outline-none focus:border-primary"
                />
                <button className="bg-primary hover:bg-primary/80 px-6 py-2 rounded-r-lg transition-colors duration-300">
                  구독
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 구분선 */}
        <div className="border-t border-gray-800"></div>

        {/* 하단 정보 */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* 저작권 정보 */}
            <div className="text-gray-400 text-sm">
              <p>&copy; 2024 KEBAB HOUSE. All rights reserved.</p>
              <p className="mt-1">
                사업자등록번호: 123-45-67890 | 대표: 김케밥 | 통신판매업신고:
                제2024-서울강남-12345호
              </p>
            </div>

            {/* 법적 링크 */}
            <div className="flex space-x-6 text-sm text-gray-400">
              <a
                href="#"
                className="hover:text-secondary transition-colors duration-300"
              >
                개인정보처리방침
              </a>
              <a
                href="#"
                className="hover:text-secondary transition-colors duration-300"
              >
                이용약관
              </a>
              <a
                href="#"
                className="hover:text-secondary transition-colors duration-300"
              >
                가맹약관
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 맨 위로 버튼 */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-14 h-14 bg-primary hover:bg-primary/80 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 z-40"
        aria-label="맨 위로"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
