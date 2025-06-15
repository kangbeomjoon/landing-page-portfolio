"use client";

import { useState, useEffect, useRef } from "react";
import { MapPin, Clock, Phone, Search } from "lucide-react";

const StoreSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("서울");
  const [searchTerm, setSearchTerm] = useState("");
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

  const regions = [
    "서울",
    "경기",
    "인천",
    "부산",
    "대구",
    "광주",
    "대전",
    "울산",
  ];

  const stores = {
    서울: [
      {
        name: "강남점",
        address: "서울시 강남구 테헤란로 123",
        phone: "02-1234-5678",
        hours: "11:00 - 22:00",
        isNew: true,
      },
      {
        name: "홍대점",
        address: "서울시 마포구 와우산로 456",
        phone: "02-2345-6789",
        hours: "11:00 - 23:00",
        isNew: false,
      },
      {
        name: "잠실점",
        address: "서울시 송파구 올림픽로 789",
        phone: "02-3456-7890",
        hours: "10:30 - 22:30",
        isNew: false,
      },
      {
        name: "명동점",
        address: "서울시 중구 명동길 321",
        phone: "02-4567-8901",
        hours: "11:00 - 22:00",
        isNew: true,
      },
    ],
    경기: [
      {
        name: "수원점",
        address: "경기도 수원시 영통구 광교로 123",
        phone: "031-1234-5678",
        hours: "11:00 - 22:00",
        isNew: false,
      },
      {
        name: "분당점",
        address: "경기도 성남시 분당구 판교역로 456",
        phone: "031-2345-6789",
        hours: "11:00 - 22:30",
        isNew: true,
      },
      {
        name: "일산점",
        address: "경기도 고양시 일산서구 중앙로 789",
        phone: "031-3456-7890",
        hours: "11:00 - 22:00",
        isNew: false,
      },
    ],
    인천: [
      {
        name: "송도점",
        address: "인천시 연수구 송도국제대로 123",
        phone: "032-1234-5678",
        hours: "11:00 - 22:00",
        isNew: true,
      },
      {
        name: "부평점",
        address: "인천시 부평구 부평대로 456",
        phone: "032-2345-6789",
        hours: "11:00 - 22:30",
        isNew: false,
      },
    ],
    부산: [
      {
        name: "해운대점",
        address: "부산시 해운대구 해운대해변로 123",
        phone: "051-1234-5678",
        hours: "11:00 - 22:00",
        isNew: false,
      },
      {
        name: "서면점",
        address: "부산시 부산진구 서면로 456",
        phone: "051-2345-6789",
        hours: "11:00 - 22:30",
        isNew: true,
      },
    ],
    대구: [
      {
        name: "동성로점",
        address: "대구시 중구 동성로 123",
        phone: "053-1234-5678",
        hours: "11:00 - 22:00",
        isNew: false,
      },
    ],
    광주: [
      {
        name: "충장로점",
        address: "광주시 동구 충장로 123",
        phone: "062-1234-5678",
        hours: "11:00 - 22:00",
        isNew: false,
      },
    ],
    대전: [
      {
        name: "둔산점",
        address: "대전시 서구 둔산로 123",
        phone: "042-1234-5678",
        hours: "11:00 - 22:00",
        isNew: true,
      },
    ],
    울산: [
      {
        name: "삼산점",
        address: "울산시 남구 삼산로 123",
        phone: "052-1234-5678",
        hours: "11:00 - 22:00",
        isNew: false,
      },
    ],
  };

  const filteredStores =
    stores[selectedRegion as keyof typeof stores]?.filter(
      (store) =>
        store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        store.address.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  return (
    <section ref={sectionRef} id="store" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        {/* 섹션 헤더 */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            STORE
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            전국 150여 개 매장에서 언제나 신선한 케밥을 만나보세요
          </p>
        </div>

        {/* 통계 정보 */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-primary mb-2">150+</div>
            <div className="text-gray-600">전국 매장</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-primary mb-2">8</div>
            <div className="text-gray-600">광역시도</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-primary mb-2">24H</div>
            <div className="text-gray-600">일부 매장</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-primary mb-2">5⭐</div>
            <div className="text-gray-600">평균 평점</div>
          </div>
        </div>

        {/* 검색 및 필터 */}
        <div
          className={`bg-white p-6 rounded-2xl shadow-lg mb-12 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid md:grid-cols-2 gap-6">
            {/* 지역 선택 */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                지역 선택
              </label>
              <div className="grid grid-cols-4 gap-2">
                {regions.map((region) => (
                  <button
                    key={region}
                    onClick={() => setSelectedRegion(region)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedRegion === region
                        ? "bg-primary text-white shadow-lg"
                        : "bg-gray-100 text-gray-600 hover:bg-primary hover:text-white"
                    }`}
                  >
                    {region}
                  </button>
                ))}
              </div>
            </div>

            {/* 매장 검색 */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                매장 검색
              </label>
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="매장명 또는 주소로 검색"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 매장 목록 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStores.map((store, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 overflow-hidden ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${700 + index * 100}ms` }}
            >
              {/* 매장 헤더 */}
              <div className="bg-gradient-to-r from-primary to-orange-600 p-6 text-white relative">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold">{store.name}</h3>
                  {store.isNew && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      NEW
                    </span>
                  )}
                </div>
                <div className="absolute bottom-0 right-0 text-6xl opacity-20">
                  🏪
                </div>
              </div>

              {/* 매장 정보 */}
              <div className="p-6">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin
                      className="text-primary flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span className="text-gray-700">{store.address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="text-primary flex-shrink-0" size={18} />
                    <span className="text-gray-700">{store.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="text-primary flex-shrink-0" size={18} />
                    <span className="text-gray-700">{store.hours}</span>
                  </div>
                </div>

                {/* 액션 버튼들 */}
                <div className="flex space-x-2 mt-6">
                  <button className="flex-1 bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 py-2 px-4 rounded-lg font-medium">
                    길찾기
                  </button>
                  <button className="flex-1 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all duration-300 py-2 px-4 rounded-lg font-medium">
                    전화걸기
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 매장이 없을 때 */}
        {filteredStores.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              검색 결과가 없습니다
            </h3>
            <p className="text-gray-600">
              다른 지역을 선택하거나 검색어를 변경해보세요.
            </p>
          </div>
        )}

        {/* 가맹 문의 CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              우리 지역에 매장이 없나요?
            </h3>
            <p className="text-gray-600 mb-6">
              KEBAB HOUSE 가맹점 개설 문의를 통해 당신의 지역에 새로운 매장을
              열어보세요!
            </p>
            <button
              onClick={() => {
                const franchiseSection = document.getElementById("franchise");
                if (franchiseSection) {
                  franchiseSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="btn-primary text-lg px-8 py-4"
            >
              가맹 문의하기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreSection;
