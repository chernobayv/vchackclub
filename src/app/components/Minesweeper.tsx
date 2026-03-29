// Java code shell — Minesweeper game will be implemented here in Java
export function Minesweeper() {
  return (
    <div className="h-full w-full flex flex-col bg-[#1a1a1a] font-mono overflow-hidden">
      {/* Editor title bar */}
      <div className="flex items-center gap-2 px-4 py-2 bg-[#2d2d2d] border-b border-[#444]">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56] block" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e] block" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f] block" />
        </div>
        <span className="text-[#888] text-xs ml-2">Minesweeper.java</span>
      </div>

      {/* Line numbers + code */}
      <div className="flex flex-1 overflow-auto">
        {/* Line numbers */}
        <div className="select-none text-right pr-4 pt-4 pb-4 pl-4 text-[#555] text-xs leading-6 min-w-[3rem] bg-[#1a1a1a]">
          {Array.from({ length: 24 }, (_, i) => (
            <div key={i + 1}>{i + 1}</div>
          ))}
        </div>

        {/* Code content */}
        <div className="pt-4 pb-4 pr-4 text-xs leading-6 flex-1 overflow-auto">
          <div><span className="text-[#888]">// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span></div>
          <div><span className="text-[#888]">// ✦  Minesweeper — coming soon in Java  ✦</span></div>
          <div><span className="text-[#888]">// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span></div>
          <div>&nbsp;</div>
          <div>
            <span className="text-[#c792ea]">public class </span>
            <span className="text-[#82aaff]">Minesweeper </span>
            <span className="text-[#89ddff]">{'{'}</span>
          </div>
          <div>&nbsp;</div>
          <div>
            <span className="text-[#888]">{'  '}// TODO: grid setup</span>
          </div>
          <div>
            <span className="text-[#888]">{'  '}// TODO: mine placement</span>
          </div>
          <div>
            <span className="text-[#888]">{'  '}// TODO: reveal logic</span>
          </div>
          <div>
            <span className="text-[#888]">{'  '}// TODO: flag system</span>
          </div>
          <div>
            <span className="text-[#888]">{'  '}// TODO: win / lose check</span>
          </div>
          <div>&nbsp;</div>
          <div>
            <span className="text-[#c792ea]">{'  '}public static void </span>
            <span className="text-[#82aaff]">main</span>
            <span className="text-[#89ddff]">(</span>
            <span className="text-[#ffcb6b]">String</span>
            <span className="text-white">[] args</span>
            <span className="text-[#89ddff]">)</span>
            <span className="text-[#89ddff]"> {'{'}</span>
          </div>
          <div>
            <span className="text-[#888]">{'    '}// 🚩 your code here</span>
          </div>
          <div>
            <span className="text-[#89ddff]">{'  }'}</span>
          </div>
          <div>&nbsp;</div>
          <div>
            <span className="text-[#89ddff]">{'}'}</span>
          </div>
          <div>&nbsp;</div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-4 bg-[#0055ff] animate-pulse" />
          </div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>
            <span className="text-[#555]">{'// paste your .java file here :)'}</span>
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div className="flex items-center justify-between px-4 py-1 bg-[#0055ff] text-white text-[10px]">
        <span>Java</span>
        <span>placeholder — game coming soon</span>
        <span>UTF-8</span>
      </div>
    </div>
  );
}
