(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();document.querySelector("#app").innerHTML=`
  <header id="header" class="site-header">
    <div class="container header-container">
      <div class="logo">
        <span class="icon-circle">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
        </span>
        <span class="logo-text">樂齡動能</span>
      </div>
      <nav class="nav-links">
        <a href="#home" class="nav-link">首頁</a>
        <a href="#about" class="nav-link">關於我們</a>
        <a href="#services" class="nav-link">服務項目</a>
        <a href="#dashboard" class="nav-link">數據追蹤</a>
        <a href="#ranking" class="nav-link">排名系統</a>
        <a href="#shop" class="nav-link">精選商城</a>
      </nav>
      <button class="btn btn-primary">立即開始</button>
    </div>
  </header>

  <main>
    <!-- Hero Section -->
    <section id="home" class="hero-section">
      <div class="hero-bg-accent"></div>
      <div class="container hero-container">
        <div class="hero-content">
          <h1 class="hero-title">高齡生活的 <br/><span class="text-gradient">創新運動方案</span></h1>
          <p class="hero-subtitle">專為65-100歲長者設計</p>
          <p class="hero-desc">結合 AI 骨骼分析與遊戲化運動，讓健康生活變得簡單有趣。</p>
          <button class="btn btn-primary btn-large">立即開始</button>
        </div>
        <div class="hero-image-wrapper">
          <div class="floating-card card-status top-right fade-up">
            <span class="icon-wrap bg-orange">💪</span>
            <div class="card-text">
              <span class="label">今日運動</span>
              <span class="value">已完成</span>
            </div>
          </div>
          <div class="floating-card card-status bottom-left fade-up-delay">
            <span class="icon-wrap bg-blue">🏆</span>
            <div class="card-text">
              <span class="label">全國排名</span>
              <span class="value">#128</span>
            </div>
          </div>
          <img src="https://images.unsplash.com/photo-1576402242171-ecb98bce1ff5?auto=format&fit=crop&q=80&w=800" alt="Active Seniors" class="hero-image" />
        </div>
      </div>
    </section>

    <!-- About Us Section -->
    <section id="about" class="section bg-light">
      <div class="container">
        <h2 class="section-title">重新定義 <span class="text-gradient">高齡運動</span></h2>
        <p class="section-desc">我們相信運動不分年齡。透過創新的球類運動與即時數據分析，我們幫助每一位長者找到最適合自己的運動節奏，延緩老化並提升生活品質。</p>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon bg-blue">📊</div>
            <h3>數據驅動</h3>
            <p>精準分析每一分鐘的動態。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon bg-orange">🎮</div>
            <h3>遊戲化體驗</h3>
            <p>讓運動像玩遊戲一樣有趣。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon bg-purple">🤝</div>
            <h3>社群互助</h3>
            <p>與志同道合的朋友一起進步。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="section">
      <div class="container">
        <h2 class="section-title">全方位的 <span class="text-gradient">健康解決方案</span></h2>
        <div class="services-grid">
          <div class="service-card hover-lift">
            <h4>創新球類運動</h4>
            <p>低衝擊球類運動，提升協調性與反應。</p>
          </div>
          <div class="service-card hover-lift">
            <h4>健康數據追蹤</h4>
            <p>即時監測心率、步數、運動強度。</p>
          </div>
          <div class="service-card hover-lift">
            <h4>骨骼分析系統</h4>
            <p>AI 驅動分析，及早發現潛在問題。</p>
          </div>
          <div class="service-card hover-lift">
            <h4>全國排名競賽</h4>
            <p>從地方藥局到全國排行榜的競賽。</p>
          </div>
          <div class="service-card hover-lift">
            <h4>輔具推薦</h4>
            <p>根據分析結果推薦最適合的輔助器具。</p>
          </div>
          <div class="service-card hover-lift">
            <h4>保健食品</h4>
            <p>針對骨骼、關節提供個人化營養建議。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Health Dashboard Section -->
    <section id="dashboard" class="section bg-light">
      <div class="container">
        <h2 class="section-title">健康數據 <span class="text-gradient">實時掌握</span></h2>
        <div class="dashboard-wrapper">
          <div class="chart-container">
            <!-- 假的圖表佔位 -->
            <div class="mock-chart">
               <div class="bar h-40"></div>
               <div class="bar h-60"></div>
               <div class="bar h-80"></div>
               <div class="bar h-50"></div>
               <div class="bar h-90"></div>
               <div class="bar h-70"></div>
               <div class="bar h-100"></div>
            </div>
            <p class="chart-label">近期運動強度</p>
          </div>
          <div class="stats-grid">
            <div class="stat-card">
              <span class="stat-title">步數</span>
              <span class="stat-value text-blue">8,420</span>
            </div>
            <div class="stat-card">
              <span class="stat-title">心率</span>
              <span class="stat-value text-orange">72 <small>bpm</small></span>
            </div>
            <div class="stat-card">
              <span class="stat-title">運動強度</span>
              <span class="stat-value text-purple">高</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Ranking System Section -->
    <section id="ranking" class="section">
      <div class="container">
        <h2 class="section-title">排位系統 <span class="text-gradient">全球聯賽</span></h2>
        <div class="ranking-tabs">
          <button class="tab-btn active" data-target="national">全國排名</button>
          <button class="tab-btn" data-target="world">世界排名</button>
        </div>
        <div class="ranking-list" id="national-ranking">
          <div class="ranking-item top-3">
            <div class="rank">🏆</div>
            <div class="user-info">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=chan" alt="avatar" class="avatar"/>
              <div>
                <p class="user-name">陳伯伯</p>
                <p class="user-loc">台灣</p>
              </div>
            </div>
            <div class="user-score">9,850 <span class="trend up">+2</span></div>
          </div>
          <div class="ranking-item top-3">
            <div class="rank">🥈</div>
            <div class="user-info">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=lee" alt="avatar" class="avatar"/>
              <div>
                <p class="user-name">李阿姨</p>
                <p class="user-loc">高雄</p>
              </div>
            </div>
            <div class="user-score">9,720 <span class="trend">-</span></div>
          </div>
           <div class="ranking-item top-3">
            <div class="rank">🥉</div>
            <div class="user-info">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=wang" alt="avatar" class="avatar"/>
              <div>
                <p class="user-name">王爺爺</p>
                <p class="user-loc">台中</p>
              </div>
            </div>
            <div class="user-score">9,650 <span class="trend up">+5</span></div>
          </div>
        </div>
        
        <div class="ranking-list hidden" id="world-ranking">
          <div class="ranking-item top-3">
            <div class="rank">🏆</div>
            <div class="user-info">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=tanaka" alt="avatar" class="avatar"/>
              <div>
                <p class="user-name">Tanaka san</p>
                <p class="user-loc">Japan</p>
              </div>
            </div>
            <div class="user-score">10,240 <span class="trend up">+1</span></div>
          </div>
          <div class="ranking-item top-3">
            <div class="rank">🥈</div>
            <div class="user-info">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=chan" alt="avatar" class="avatar"/>
              <div>
                <p class="user-name">陳伯伯</p>
                <p class="user-loc">Taiwan</p>
              </div>
            </div>
            <div class="user-score">9,850 <span class="trend up">+2</span></div>
          </div>
           <div class="ranking-item top-3">
            <div class="rank">🥉</div>
            <div class="user-info">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=kim" alt="avatar" class="avatar"/>
              <div>
                <p class="user-name">Kim grandma</p>
                <p class="user-loc">Korea</p>
              </div>
            </div>
            <div class="user-score">9,550 <span class="trend down">-1</span></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Shop Section -->
    <section id="shop" class="section bg-light text-center">
      <div class="container">
        <h2 class="section-title">專屬您的 <span class="text-gradient">健康管家</span></h2>
        <div class="shop-grid">
          <div class="product-card hover-lift">
            <div class="product-img-ph bg-blue">🛒</div>
            <h4>智能助行器</h4>
            <p class="price">$5,800</p>
          </div>
          <div class="product-card hover-lift">
            <div class="product-img-ph bg-orange">💊</div>
            <h4>關節保健膠囊</h4>
            <p class="price">$1,280</p>
          </div>
          <div class="product-card hover-lift">
            <div class="product-img-ph bg-purple">⌚</div>
            <h4>智能心率手環</h4>
            <p class="price">$2,980</p>
          </div>
          <div class="product-card hover-lift">
            <div class="product-img-ph bg-cyan">🦴</div>
            <h4>骨質密度補充品</h4>
            <p class="price">$980</p>
          </div>
        </div>
        <button class="btn btn-outline mt-8">查看專屬推薦</button>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-content">
      <div class="footer-brand">
        <div class="logo">
           <span class="logo-text text-white">樂齡動能</span>
        </div>
        <p class="mission">Connecting health and happiness</p>
      </div>
      <div class="footer-links">
        <a href="#">Support</a>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">FAQ</a>
      </div>
    </div>
  </footer>
`;const d=document.getElementById("header");window.addEventListener("scroll",()=>{window.scrollY>50?d.classList.add("scrolled"):d.classList.remove("scrolled")});document.querySelectorAll(".nav-link").forEach(t=>{t.addEventListener("click",function(i){i.preventDefault();const e=this.getAttribute("href"),c=document.querySelector(e);c&&c.scrollIntoView({behavior:"smooth"})})});const n=document.querySelectorAll(".tab-btn"),l=document.querySelectorAll(".ranking-list");n.forEach(t=>{t.addEventListener("click",()=>{n.forEach(e=>e.classList.remove("active")),t.classList.add("active"),l.forEach(e=>e.classList.add("hidden"));const i=t.getAttribute("data-target")+"-ranking";document.getElementById(i).classList.remove("hidden")})});
