'use client';

import Image from "next/image";
import { useTheme } from "./contexts/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  const { theme } = useTheme();

  // 彩色风格的样式
  const colorfulStyles = {
    container: "min-h-screen bg-gradient-to-br from-slate-50 to-zinc-100 dark:from-slate-900 dark:to-zinc-900 font-sans",
    heroBg: "absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse",
    profileBorder: "border-4 border-white shadow-2xl",
    titleText: "text-5xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent",
    subtitleText: "text-xl text-gray-600 dark:text-gray-300 mb-2",
    descriptionText: "text-gray-500 dark:text-gray-400",
    sectionBg: "bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300",
    cardBg1: "bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20",
    cardBg2: "bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20",
    skillBadge1: "px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200",
    skillBadge2: "px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200",
    interestCard1: "bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20",
    interestCard2: "bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20",
    interestCard3: "bg-gradient-to-br from-rose-50 to-pink-100 dark:from-rose-900/20 dark:to-pink-900/20",
    contactBg: "bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900",
    contactCard: "bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group border border-white/20"
  };

  // 深色极简科技风格的样式
  const techMinimalStyles = {
    container: "min-h-screen bg-black text-cyan-400 font-mono",
    heroBg: "absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl animate-pulse",
    profileBorder: "border-2 border-cyan-500/50 shadow-2xl shadow-cyan-500/20",
    titleText: "text-6xl font-bold mb-6 text-cyan-400 tracking-wider",
    subtitleText: "text-xl text-cyan-300 mb-4 tracking-wide",
    descriptionText: "text-cyan-200/80",
    sectionBg: "border border-cyan-500/20 bg-gray-900/50 rounded-lg p-6 backdrop-blur-sm",
    cardBg1: "border border-cyan-500/30 bg-gray-900/70 p-4 rounded",
    cardBg2: "border border-cyan-500/30 bg-gray-900/70 p-4 rounded",
    skillBadge1: "px-2 py-1 bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 rounded text-sm font-mono",
    skillBadge2: "px-2 py-1 bg-blue-500/10 text-blue-300 border border-blue-500/30 rounded text-sm font-mono",
    interestCard1: "border border-cyan-500/20 bg-gray-900/50 p-4 rounded hover:border-cyan-500/40 transition-all duration-300",
    interestCard2: "border border-cyan-500/20 bg-gray-900/50 p-4 rounded hover:border-cyan-500/40 transition-all duration-300",
    interestCard3: "border border-cyan-500/20 bg-gray-900/50 p-4 rounded hover:border-cyan-500/40 transition-all duration-300",
    contactBg: "border border-cyan-500/30 bg-gray-900/70 rounded-lg p-6",
    contactCard: "border border-cyan-500/20 bg-gray-900/50 p-4 rounded hover:border-cyan-500/40 transition-all duration-300"
  };

  const styles = theme === 'colorful' ? colorfulStyles : techMinimalStyles;

  return (
    <div className={styles.container}>
      <ThemeToggle />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Hero Section */}
        <section className="mb-20 text-center animate-fade-in">
          <div className="relative mb-8">
            <div className={styles.heroBg}></div>
            <div className="relative inline-block">
              <Image
                src="/images/profile image.jpg"
                alt="子来的头像"
                width={theme === 'colorful' ? 160 : 140}
                height={theme === 'colorful' ? 160 : 140}
                className={`rounded-full ${styles.profileBorder} hover:scale-105 transition-transform duration-300`}
                priority
              />
            </div>
          </div>

          <h1 className={styles.titleText}>
            {theme === 'tech-minimal' && '> '}
            子来
          </h1>

          <p className={`${styles.subtitleText} max-w-2xl mx-auto leading-relaxed`}>
            资深后端工程师 · 两娃奶爸 · AI破局俱乐部行动家
          </p>

          <p className={`${styles.descriptionText} max-w-3xl mx-auto leading-relaxed`}>
            {theme === 'tech-minimal' && '$ '}
            正在参加行动家版的AI编程训练营，作为一个学员和大家分享学习过程
          </p>
        </section>

        {/* Skills Section */}
        <section className={`mb-20 ${styles.sectionBg}`}>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center gap-2">
            {theme === 'colorful' ? (
              <>
                <span className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></span>
                技能专长
                <span className="w-8 h-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"></span>
              </>
            ) : (
              <>
                <span className="text-cyan-400">$</span>
                <span className="text-cyan-400 mx-2">技能专长</span>
                <span className="text-cyan-400">_</span>
              </>
            )}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`${styles.cardBg1} ${theme === 'colorful' ? 'hover:scale-105' : ''} transition-transform duration-300`}>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className={`w-2 h-2 ${theme === 'colorful' ? 'bg-blue-500' : 'bg-cyan-400'} rounded-full animate-pulse`}></span>
                后端技术栈
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Java', 'MySQL', 'Spring Boot', 'Microservices', 'Redis'].map((skill) => (
                  <span
                    key={skill}
                    className={styles.skillBadge1}
                  >
                    {theme === 'tech-minimal' && '['}{skill}{theme === 'tech-minimal' && ']'}
                  </span>
                ))}
              </div>
            </div>

            <div className={`${styles.cardBg2} ${theme === 'colorful' ? 'hover:scale-105' : ''} transition-transform duration-300`}>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className={`w-2 h-2 ${theme === 'colorful' ? 'bg-purple-500' : 'bg-blue-400'} rounded-full animate-pulse`}></span>
                学习探索
              </h3>
              <div className="flex flex-wrap gap-2">
                {['SEO', 'GEO', 'AI营销', '前端基础', 'TypeScript'].map((skill) => (
                  <span
                    key={skill}
                    className={styles.skillBadge2}
                  >
                    {theme === 'tech-minimal' && '['}{skill}{theme === 'tech-minimal' && ']'}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Interests Section */}
        <section className={`mb-20 ${styles.sectionBg}`}>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center gap-2">
            {theme === 'colorful' ? (
              <>
                <span className="w-8 h-1 bg-gradient-to-r from-green-500 to-teal-600 rounded-full"></span>
                兴趣爱好
                <span className="w-8 h-1 bg-gradient-to-r from-teal-600 to-green-500 rounded-full"></span>
              </>
            ) : (
              <>
                <span className="text-cyan-400">$</span>
                <span className="text-cyan-400 mx-2">兴趣爱好</span>
                <span className="text-cyan-400">_</span>
              </>
            )}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`${styles.interestCard1} text-center group h-full`}>
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">灵性阅读</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {theme === 'tech-minimal' && '> '}
                喜欢看灵性的书，比如《与神对话》系列，期待忆起真实身份
              </p>
            </div>

            <div className={`${styles.interestCard2} text-center group h-full`}>
              <div className="text-3xl mb-3">🏛️</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">国学文化</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {theme === 'tech-minimal' && '> '}
                喜欢听大师讲佛经，热爱中医等传统文化
              </p>
            </div>

            <div className={`${styles.interestCard3} text-center group h-full`}>
              <div className="text-3xl mb-3">🍳</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">烹饪美食</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {theme === 'tech-minimal' && '> '}
                喜欢做饭，别人吃完你的菜就是一种幸福感的回馈
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className={styles.contactBg}>
          <h2 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center gap-2">
            {theme === 'colorful' ? (
              <>
                <span className="w-8 h-1 bg-gradient-to-r from-white to-gray-400 rounded-full"></span>
                联系方式
                <span className="w-8 h-1 bg-gradient-to-r from-gray-400 to-white rounded-full"></span>
              </>
            ) : (
              <>
                <span className="text-cyan-400">$</span>
                <span className="text-cyan-400 mx-2">联系方式</span>
                <span className="text-cyan-400">_</span>
              </>
            )}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
            <a
              href="#"
              className={styles.contactCard}
            >
              <div className="text-2xl mb-2">✍️</div>
              <h3 className="text-lg font-semibold text-white mb-1">公众号/知乎</h3>
              <p className="text-gray-300 group-hover:text-white transition-colors">子来AI探索</p>
            </a>

            <div className={styles.contactCard}>
              <div className="text-2xl mb-2">💬</div>
              <h3 className="text-lg font-semibold text-white mb-1">微信</h3>
              <p className="text-gray-300 group-hover:text-white transition-colors">kong-shine</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className={`${theme === 'colorful' ? 'text-gray-400' : 'text-cyan-300/60'} text-sm italic`}>
              {theme === 'tech-minimal' && '// '}
              &quot;期待自己能忆起自己的真实身份，也能成为神的使者~&quot;
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className={`text-center mt-16 ${theme === 'colorful' ? 'text-gray-500 dark:text-gray-400' : 'text-cyan-300/40'}`}>
          <p className="text-sm">
            {theme === 'tech-minimal' && '// '}
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