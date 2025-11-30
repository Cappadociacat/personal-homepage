'use client';

import Image from "next/image";
import { useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-zinc-100 dark:from-slate-900 dark:to-zinc-900 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Hero Section */}
        <section className="mb-20 text-center animate-fade-in">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative inline-block">
              <Image
                src="/images/profile image.jpg"
                alt="子来的头像"
                width={160}
                height={160}
                className="rounded-full border-4 border-white shadow-2xl hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </div>

          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            子来
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-2 max-w-2xl mx-auto leading-relaxed">
            资深后端工程师 · 两娃奶爸 · AI破局俱乐部行动家
          </p>

          <p className="text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            正在参加行动家版的AI编程训练营，作为一个学员和大家分享学习过程
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-20 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center gap-2">
            <span className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></span>
            技能专长
            <span className="w-8 h-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                后端技术栈
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Java', 'MySQL', 'Spring Boot', 'Microservices', 'Redis'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-900/70 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                学习探索
              </h3>
              <div className="flex flex-wrap gap-2">
                {['SEO', 'GEO', 'AI营销', '前端基础', 'TypeScript'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium hover:bg-purple-200 dark:hover:bg-purple-900/70 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Interests Section */}
        <section className="mb-20 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center gap-2">
            <span className="w-8 h-1 bg-gradient-to-r from-green-500 to-teal-600 rounded-full"></span>
            兴趣爱好
            <span className="w-8 h-1 bg-gradient-to-r from-teal-600 to-green-500 rounded-full"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-6 h-full hover:scale-105 transition-all duration-300 group-hover:shadow-lg">
                <div className="text-3xl mb-3">📚</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">灵性阅读</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  喜欢看灵性的书，比如《与神对话》系列，期待忆起真实身份
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl p-6 h-full hover:scale-105 transition-all duration-300 group-hover:shadow-lg">
                <div className="text-3xl mb-3">🏛️</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">国学文化</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  喜欢听大师讲佛经，热爱中医等传统文化
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-rose-50 to-pink-100 dark:from-rose-900/20 dark:to-pink-900/20 rounded-xl p-6 h-full hover:scale-105 transition-all duration-300 group-hover:shadow-lg">
                <div className="text-3xl mb-3">🍳</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">烹饪美食</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  喜欢做饭，别人吃完你的菜就是一种幸福感的回馈
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center gap-2">
            <span className="w-8 h-1 bg-gradient-to-r from-white to-gray-400 rounded-full"></span>
            联系方式
            <span className="w-8 h-1 bg-gradient-to-r from-gray-400 to-white rounded-full"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
            <a
              href="#"
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group border border-white/20"
            >
              <div className="text-2xl mb-2">✍️</div>
              <h3 className="text-lg font-semibold text-white mb-1">公众号/知乎</h3>
              <p className="text-gray-300 group-hover:text-white transition-colors">子来AI探索</p>
            </a>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group border border-white/20">
              <div className="text-2xl mb-2">💬</div>
              <h3 className="text-lg font-semibold text-white mb-1">微信</h3>
              <p className="text-gray-300 group-hover:text-white transition-colors">kong-shine</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm italic">
              "期待自己能忆起自己的真实身份，也能成为神的使者~"
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center mt-16 text-gray-500 dark:text-gray-400">
          <p className="text-sm">
            © 2024 子来 · 用心记录技术学习与人生探索
          </p>
        </footer>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}