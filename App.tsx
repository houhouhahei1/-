import React, { useState, useEffect } from 'react';
import { GlassCard, Badge, SectionTitle } from './components/ui/Glass';
import { 
  BookOpen, Target, Zap, Layers, CheckCircle2, XCircle, ArrowRight, 
  Lightbulb, ChefHat, Sword, Search, Box, PenTool, Flame
} from './components/ui/Icons';

// Background Component
const LiquidBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden bg-gray-50">
    <div className="absolute top-0 left-[-10%] w-[600px] h-[600px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
    <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
    <div className="absolute -bottom-32 left-[20%] w-[600px] h-[600px] bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
    <div className="absolute inset-0 bg-white/40 backdrop-blur-[80px]"></div>
  </div>
);

// Progress Bar
const ProgressBar = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setWidth(Number(scroll));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1.5 z-50 bg-gray-100/20 backdrop-blur-sm">
      <div 
        className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-all duration-100 ease-out" 
        style={{ width: `${width * 100}%` }} 
      />
    </div>
  );
};

// Checklist Item Component
const ChecklistItem = ({ text, subtext, delay }: { text: string; subtext?: string; delay: number }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div 
      onClick={() => setChecked(!checked)}
      className={`group flex items-start p-5 rounded-2xl transition-all duration-300 cursor-pointer border shadow-sm ${checked ? 'bg-green-50/80 border-green-200' : 'bg-white/60 border-white/80 hover:bg-white/90 hover:shadow-md hover:-translate-y-0.5'}`}
    >
      <div className={`mt-1 mr-4 flex-shrink-0 transition-transform duration-300 ${checked ? 'scale-110' : 'group-hover:scale-110'}`}>
        {checked ? (
          <CheckCircle2 className="w-6 h-6 text-green-600" />
        ) : (
          <div className="w-6 h-6 rounded-full border-2 border-gray-300 group-hover:border-blue-500" />
        )}
      </div>
      <div>
        <div className={`text-lg font-bold transition-colors ${checked ? 'text-gray-500 line-through decoration-2 decoration-green-400' : 'text-gray-900'}`}>
          {text}
        </div>
        {subtext && (
          <div className={`text-sm mt-1 leading-relaxed ${checked ? 'text-gray-400' : 'text-gray-600'}`}>
            {subtext}
          </div>
        )}
      </div>
    </div>
  );
};

// Concept Box
const ConceptBox = ({ title, icon: Icon, children, color = "blue" }: { title: string, icon: any, children: React.ReactNode, color?: string }) => {
  const colorStyles = {
    blue: "bg-blue-50 border-blue-100 text-blue-900",
    purple: "bg-purple-50 border-purple-100 text-purple-900",
    amber: "bg-amber-50 border-amber-100 text-amber-900",
  };
  // @ts-ignore
  const style = colorStyles[color] || colorStyles.blue;

  return (
    <div className={`p-5 rounded-xl border ${style} flex flex-col gap-3`}>
      <div className="flex items-center gap-2 font-bold opacity-80">
        <Icon className="w-5 h-5" />
        <span className="uppercase text-xs tracking-wider">{title}</span>
      </div>
      <div className="text-base leading-relaxed opacity-90 font-medium">
        {children}
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen text-gray-800 selection:bg-blue-200 selection:text-blue-900 pb-32">
      <LiquidBackground />
      <ProgressBar />

      {/* Header / Nav */}
      <header className="fixed top-0 left-0 right-0 z-40 px-6 py-4 flex justify-between items-center max-w-5xl mx-auto w-full pointer-events-none">
        <div className="flex items-center gap-2 glass-panel !px-4 !py-2 rounded-full !bg-white/80 pointer-events-auto shadow-sm">
          <BookOpen className="w-4 h-4 text-blue-600" />
          <span className="text-xs font-bold tracking-widest uppercase text-gray-500">Writing Masterclass 2.0</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pt-32 space-y-32">
        
        {/* HERO SECTION */}
        <section className="relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
            <Flame className="w-3 h-3" />
            <span>深度重制版</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1] text-gray-900">
            别让你的才华，<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">死在“自嗨”里。</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl font-medium">
            为什么你文笔不错，书却没人看？<br/>
            揭秘从“写故事”到“做产品”的底层逻辑，<br/>
            手把手教你把脑洞变成爆款。
          </p>
          
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              { t: "有脑洞，没大纲", d: "写到哪算哪，两万字崩盘" },
              { t: "有文笔，没期待", d: "自我感觉良好，读者却睡着了" },
              { t: "有冲突，没爽点", d: "主角很忙，读者却觉得很憋屈" }
            ].map((item, i) => (
              <GlassCard key={i} className="!p-5 bg-white/40 hover:!bg-white/60 transition-colors">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mb-3">
                   <span className="text-red-600 font-bold text-sm">!</span>
                </div>
                <p className="font-bold text-gray-900 mb-1">{item.t}</p>
                <p className="text-sm text-gray-500 leading-snug">{item.d}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* SECTION 1: MINDSET - PRODUCT vs STORY */}
        <section>
          <SectionTitle subtitle="第一课：认知觉醒">
            你不是在“写字”，你是在“签合同”
          </SectionTitle>
          
          <GlassCard className="bg-white/70">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">什么是网文的本质？</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  网文不是传统文学。传统文学是让读者“思考”，网文是让读者“体验”。
                  当读者点开你的书，你们就签了一份看不见的<span className="font-bold text-gray-900 bg-yellow-100 px-1 rounded">情感契约</span>。
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-red-50 border border-red-100 text-red-900 text-sm font-medium">
                    <XCircle className="w-5 h-5 flex-shrink-0 text-red-500" />
                    <span>违约行为：说好是爽文，结果主角一直被虐。</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-green-50 border border-green-100 text-green-900 text-sm font-medium">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-500" />
                    <span>履约行为：说好是甜宠，连吵架都在发糖。</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                 <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-3xl transform rotate-3"></div>
                 <div className="relative bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                    <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">思维模型对比</span>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                           <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                           <span className="font-bold text-gray-500">萌新思维 (艺术家)</span>
                        </div>
                        <p className="text-sm text-gray-600 pl-4 border-l-2 border-gray-200">
                          “我有话要说，我要表达自我，读者爱看不看。”
                        </p>
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                           <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                           <span className="font-bold text-blue-600">产品思维 (产品经理)</span>
                        </div>
                        <p className="text-sm text-gray-800 pl-4 border-l-2 border-blue-500 font-medium">
                          “读者想要某种情绪体验（爽、甜、吓人），我利用我的文字技巧，<span className="bg-blue-50 text-blue-700 px-1 rounded">精准交付</span>这种体验。”
                        </p>
                      </div>
                    </div>

                 </div>
              </div>
            </div>
          </GlassCard>
        </section>

        {/* SECTION 2: CORE SELLING POINT */}
        <section>
          <SectionTitle subtitle="第二课：定海神针">
            万物皆虚，唯有“核心卖点”为真
          </SectionTitle>
          
          <div className="flex flex-col gap-6">
            <p className="text-lg text-gray-600 max-w-3xl">
              很多新人大纲写得极其复杂，设定了几百个人物，结果写崩了。为什么？因为没有<strong className="text-gray-900">聚焦点</strong>。
              <br/>核心卖点不是“修仙”或“穿越”（那是题材），而是你到底<span className="underline decoration-blue-400 decoration-2 underline-offset-4">卖什么味道</span>？
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <ConceptBox title="卖“升级快感”" icon={Zap} color="blue">
                读者就是来看主角从一级升到一百级的，任何阻碍升级的剧情（如谈恋爱、搞阴谋）都是注水。
              </ConceptBox>
              <ConceptBox title="卖“日常温馨”" icon={ChefHat} color="amber">
                读者就是来看做饭、撸猫、种田的，任何苦大深仇的剧情（如灭门惨案）都是剧毒。
              </ConceptBox>
              <ConceptBox title="卖“脑洞反差”" icon={Lightbulb} color="purple">
                读者就是来看“神经病”主角如何把正常世界搞崩的，主角要是变正常了，书就完了。
              </ConceptBox>
            </div>

            <GlassCard className="!bg-gray-900 text-white mt-4">
              <div className="flex items-start gap-4">
                <Target className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold mb-2">一句话自测法</h4>
                  <p className="text-gray-300 leading-relaxed">
                    你能否用一句话概括你的书能给读者带来什么<strong>情绪价值</strong>？<br/>
                    ❌ <span className="text-gray-500 line-through">一个少年捡到戒指然后修炼的故事。</span>（这是流水账）<br/>
                    ✅ <span className="text-green-400">一个拥有“钱越多修为越强”系统的奸商，在修仙界疯狂搞钱的故事。</span>（卖点明确：搞钱+爽）
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* SECTION 3: EXECUTION - COOKING vs FIGHTING */}
        <section>
          <SectionTitle subtitle="第三课：落地执行">
            大纲不是记流水账，是“卖点说明书”
          </SectionTitle>
          
          <div className="space-y-8">
            <p className="text-lg text-gray-600">
              确定了卖点（比如：美食治愈），你所有的设定（世界观、金手指、反派）都必须为它服务。
              <br/>如果不服务于卖点，那就是废话。
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* WRONG WAY */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-200 to-pink-200 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
                <div className="relative p-6 bg-white rounded-2xl border border-red-100 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-bold uppercase">错误示范</span>
                    <XCircle className="w-5 h-5 text-red-400" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">想当然的剧情</h4>
                  <p className="text-sm text-gray-500 mb-4">核心卖点是《美食》，主角却遇到了强盗。</p>
                  <div className="p-3 bg-gray-50 rounded-lg text-sm text-gray-700 italic border-l-2 border-gray-300 mb-auto">
                    “强盗来了，主角拔出宝剑，施展了一套‘流云剑法’，大战三百回合，把强盗打跑了。”
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-red-600 text-sm font-semibold">❌ 读者反馈：</p>
                    <p className="text-gray-500 text-xs mt-1">“我来看做菜的，你给我看武侠？弃书！”</p>
                  </div>
                </div>
              </div>

              {/* RIGHT WAY */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-200 to-emerald-200 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
                <div className="relative p-6 bg-white rounded-2xl border border-green-100 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-bold uppercase">高手操作</span>
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">围绕卖点重构</h4>
                  <p className="text-sm text-gray-500 mb-4">核心卖点是《美食》，遇到强盗怎么解？</p>
                  <div className="p-3 bg-blue-50 rounded-lg text-sm text-blue-900 italic border-l-2 border-blue-400 mb-auto">
                    “强盗来了，主角淡定地从怀里掏出一碗刚出锅的‘黯然销魂饭’。香味飘出十里，强盗首领当场痛哭流涕想起妈妈的味道，跪下拜师。”
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-green-600 text-sm font-semibold">✅ 读者反馈：</p>
                    <p className="text-gray-500 text-xs mt-1">“卧槽，做饭还能这么用？太爽了！再来一章！”</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="inline-flex items-center gap-3 bg-yellow-50 text-yellow-800 px-5 py-3 rounded-xl border border-yellow-200 shadow-sm text-sm font-medium">
                <Lightbulb className="w-5 h-5 flex-shrink-0 text-yellow-600" />
                <span>口诀：换地图不换核心。不管是在校园、职场还是修仙界，主角解决问题的方式，必须永远是你的核心卖点（如：用钱砸、用菜感化、用智商碾压）。</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: ADVANCED - HOOKS & PACING */}
        <section>
          <SectionTitle subtitle="第四课：留存魔法">
            为什么读者熬夜也要看完？
          </SectionTitle>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <GlassCard hoverEffect>
               <div className="flex items-center gap-3 mb-4">
                 <div className="p-2 bg-purple-100 rounded-lg text-purple-600"><Layers className="w-5 h-5" /></div>
                 <h3 className="font-bold text-xl text-gray-900">无痕套娃法</h3>
               </div>
               <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                 新人最容易犯的错：大剧情A结束了 -> 大家都休息了 -> 开启新剧情B。
                 <br/>这时候读者最容易弃书，因为心里那口气松了。
               </p>
               <div className="bg-white/50 p-3 rounded border border-purple-100 text-sm text-purple-900">
                 <strong>高手做法：</strong>剧情A的高潮还没完全结束时，剧情B的危机已经悄悄露头。
                 <br/><span className="text-xs text-purple-500 mt-1 block">（例如：打败了魔王A欢庆胜利时，主角发现魔王A只是魔王B的看门狗...）</span>
               </div>
            </GlassCard>

            <GlassCard hoverEffect>
               <div className="flex items-center gap-3 mb-4">
                 <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><Zap className="w-5 h-5" /></div>
                 <h3 className="font-bold text-xl text-gray-900">期待感管理</h3>
               </div>
               <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                 不要为了反转而反转。网文读者的期待是线性的。
                 <br/>如果铺垫了主角要装逼，最后一定要让他装成，而且要比读者想象的还要爽。
               </p>
               <div className="bg-white/50 p-3 rounded border border-blue-100 text-sm text-blue-900">
                 <strong>核心公式：</strong>
                 <br/>压抑（遇到嘲讽/危机） + 铺垫（展示实力/准备） + 爆发（核心卖点解决问题） = 爽
               </div>
            </GlassCard>
          </div>
        </section>

        {/* CHECKLIST */}
        <section className="pb-24">
           <GlassCard className="!bg-gradient-to-b from-white/95 to-slate-50/95 border-t-4 border-t-blue-500 shadow-2xl">
             <div className="text-center mb-10">
               <h2 className="text-3xl font-bold text-gray-900 mb-2">新手完本自检清单</h2>
               <p className="text-gray-500">动笔前、卡文时、修文时，对着问自己一遍</p>
             </div>
             
             <div className="space-y-4 max-w-2xl mx-auto">
               <ChecklistItem 
                 delay={0} 
                 text="定位自检：我的卖点够单一吗？" 
                 subtext="是不是又想写言情又想写悬疑？砍掉！只留一个最核心的，其他都是配菜。" 
               />
               <ChecklistItem 
                 delay={100} 
                 text="开篇自检：前三章有没有把卖点怼到读者脸上？" 
                 subtext="别搞慢热。如果是系统文，第一章系统必须到账；如果是无敌文，第一章必须出手秒杀。" 
               />
               <ChecklistItem 
                 delay={200} 
                 text="剧情自检：这一章主角是在解决问题，还是在水？" 
                 subtext="每一章主角都必须有目的（为了变强、为了赚钱、为了救人）。无目的的对话直接删。" 
               />
               <ChecklistItem 
                 delay={300} 
                 text="结尾自检：每一章结尾有没有留钩子？" 
                 subtext="别让主角睡觉结束这一章。要让主角刚打开神秘宝箱/刚遇到仇人/刚发现秘密时结束。" 
               />
             </div>

             <div className="mt-12 text-center border-t border-gray-100 pt-8">
               <p className="text-xl font-bold text-gray-800 mb-2">
                 写作没有捷径，但有路标。
               </p>
               <p className="text-gray-500 text-sm">先学会做产品，再谈做艺术。</p>
             </div>
           </GlassCard>
        </section>

      </main>
    </div>
  );
}
