import fs from "fs";

// Read index.html
let html = fs.readFileSync("c:/Users/secre/Daoli/index.html", "utf-8");

// Define Regex to find the bar chart
const startToken = `<h3\n                      class="text-lg font-semibold text-[var(--brand-dark)] mb-4"`;
const endToken = `                    <span class="text-xs text-[var(--brand-blue)]"\n                      >週日</span\n                    >\n                  </div>\n                </div>`;

const startIndex = html.indexOf(startToken);
const endIndex = html.indexOf(endToken) + endToken.length;

if (startIndex !== -1 && endIndex !== -1) {
  const newChartHtml = `<h3
                      class="text-lg font-semibold text-[var(--brand-dark)] mb-4"
                      style="font-family: Fraunces, serif"
                    >
                      本週運動趨勢
                    </h3>
                    <div class="relative w-full h-32 sm:h-40 mt-2">
                      <svg class="w-full h-full overflow-visible" viewBox="0 0 700 200" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stop-color="var(--brand-orange)" stop-opacity="0.3"/>
                            <stop offset="100%" stop-color="var(--brand-peach)" stop-opacity="0"/>
                          </linearGradient>
                        </defs>
                        <!-- Area -->
                        <path class="chart-area" d="M 50,66 C 100,66 100,36 150,36 C 200,36 200,44 250,44 C 300,44 300,20 350,20 C 400,20 400,32 450,32 C 500,32 500,53 550,53 C 600,53 600,60 650,60 L 650,200 L 50,200 Z" fill="url(#chart-gradient)" style="opacity: 0; transition: opacity 1s ease 0.5s;" />
                        <!-- Line -->
                        <path class="chart-line" d="M 50,66 C 100,66 100,36 150,36 C 200,36 200,44 250,44 C 300,44 300,20 350,20 C 400,20 400,32 450,32 C 500,32 500,53 550,53 C 600,53 600,60 650,60" fill="none" stroke="var(--brand-orange)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" style="stroke-dasharray: 2000; stroke-dashoffset: 2000; transition: stroke-dashoffset 1.5s ease-out;" />
                        
                        <!-- Points -->
                        <circle class="chart-point" cx="50" cy="66" r="6" fill="white" stroke="var(--brand-orange)" stroke-width="3" style="transform: scale(0); transform-origin: 50px 66px; transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0s;" />
                        <circle class="chart-point" cx="150" cy="36" r="6" fill="white" stroke="var(--brand-orange)" stroke-width="3" style="transform: scale(0); transform-origin: 150px 36px; transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s;" />
                        <circle class="chart-point" cx="250" cy="44" r="6" fill="white" stroke="var(--brand-orange)" stroke-width="3" style="transform: scale(0); transform-origin: 250px 44px; transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s;" />
                        <circle class="chart-point" cx="350" cy="20" r="6" fill="white" stroke="var(--brand-orange)" stroke-width="3" style="transform: scale(0); transform-origin: 350px 20px; transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s;" />
                        <circle class="chart-point" cx="450" cy="32" r="6" fill="white" stroke="var(--brand-orange)" stroke-width="3" style="transform: scale(0); transform-origin: 450px 32px; transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s;" />
                        <circle class="chart-point" cx="550" cy="53" r="6" fill="white" stroke="var(--brand-orange)" stroke-width="3" style="transform: scale(0); transform-origin: 550px 53px; transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s;" />
                        <circle class="chart-point" cx="650" cy="60" r="6" fill="white" stroke="var(--brand-orange)" stroke-width="3" style="transform: scale(0); transform-origin: 650px 60px; transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s;" />
                      </svg>
                    </div>
                    <div class="flex items-center justify-between text-xs text-[var(--brand-blue)] mt-2 mx-1 lg:mx-4">
                      <span>週一</span><span>週二</span><span>週三</span><span>週四</span><span>週五</span><span>週六</span><span>週日</span>
                    </div>`;

  const newHtml = html.substring(0, startIndex) + newChartHtml + html.substring(endIndex);
  fs.writeFileSync("c:/Users/secre/Daoli/index.html", newHtml);
  console.log("Successfully replaced bar chart with dynamic SVG line chart.");
} else {
  console.log("Could not find the chart section in index.html. Start:", startIndex, "End:", endIndex);
}
