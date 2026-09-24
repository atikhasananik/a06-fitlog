
"use client"
import React, { useState, useEffect } from 'react';
import { 
  AlertTriangle, 
  RotateCcw, 
  Home, 
  Bug, 
  ChevronDown, 
  ChevronUp, 
  ShieldAlert, 
  Copy, 
  Check, 
  Server, 
  Database, 
  KeyRound, 
  Activity,
  LifeBuoy,
  X,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
  // UI State Handling
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [isRetrying, setIsRetrying] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 24,
        y: (e.clientY / window.innerHeight - 0.5) * 24,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleReset = () => {
    setIsRetrying(true);
    triggerToast('Attempting to restore session...');
    setTimeout(() => {
      reset();
      setIsRetrying(false);
    }, 600);
  };

  const copyErrorToClipboard = () => {
    const errorText = `Error: ${error?.message || 'Unknown Error'}\nDigest: ${error?.digest || 'N/A'}\nStack: ${error?.stack || 'No stack trace available'}`;
    
    // Web safe copy fallback
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(errorText);
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = errorText;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }

    setCopied(true);
    triggerToast('Error stack copied to clipboard!');
    setTimeout(() => setCopied(false), 2500);
  };

  const handleReportIssue = () => {
    triggerToast('Issue report sent to our engineering team!');
  };

  return (
    <div className="min-h-screen bg-[#0e0f12] text-slate-100 flex items-center justify-center p-4 sm:p-6 lg:p-12 relative overflow-hidden font-sans selection:bg-[#c0fd12] selection:text-black">
      
      {/* Background Cyber Grid & Interactive Neon Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#c0fd12]/10 rounded-full blur-[150px] transition-transform duration-700 ease-out"
          style={{ transform: `translate(calc(-50% + ${mousePos.x * 2}px), calc(-50% + ${mousePos.y * 2}px))` }}
        />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-red-500/10 rounded-full blur-[140px]" />
        
        {/* Subtle Tech Mesh Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Main Glassmorphic Hero Card */}
      <main className="relative z-10 w-full max-w-2xl bg-[#14161d]/80 border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10 backdrop-blur-2xl shadow-[0_0_80px_rgba(0,0,0,0.8)] flex flex-col items-center text-center">
        
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1f28] border border-red-500/30 text-red-400 text-xs font-semibold tracking-wider uppercase mb-6 shadow-inner backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
          <ShieldAlert size={14} className="text-red-400" />
          <span>Runtime System Exception</span>
        </div>

        {/* Animated Error Pulse Icon */}
        <div className="relative mb-6 group cursor-pointer" onClick={handleReset}>
          <div className="absolute inset-0 bg-red-500/20 rounded-3xl blur-xl group-hover:bg-[#c0fd12]/20 transition-all duration-500 animate-pulse" />
          <div className="relative p-5 sm:p-6 rounded-3xl bg-[#181a22] border border-red-500/40 text-red-400 group-hover:border-[#c0fd12] group-hover:text-[#c0fd12] shadow-2xl transition-all duration-300 transform group-hover:scale-105">
            <AlertTriangle size={48} className="animate-bounce" />
          </div>
        </div>

        {}
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white uppercase font-sans">
          Something went wrong
        </h1>
        <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-md leading-relaxed font-normal">
          An unexpected error occurred during execution. Dont worry, your workout data is safely synced.
        </p>

        {/* Action Buttons Group */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-md">
          {/* Try Again / Reset */}
          <button
            onClick={handleReset}
            disabled={isRetrying}
            className="w-full sm:flex-1 bg-[#c0fd12] hover:bg-[#b0eb0e] active:scale-[0.98] text-black font-extrabold text-sm py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2.5 transition-all shadow-[0_0_30px_rgba(192,253,18,0.25)] disabled:opacity-50"
          >
            <RotateCcw size={18} className={isRetrying ? 'animate-spin' : ''} />
            <span>{isRetrying ? 'Restoring...' : 'Try Again'}</span>
          </button>

          {/* Return Home */}
          <Link href={'/'}>
          <button
            
            className="w-full sm:flex-1 bg-[#1c1f28] hover:bg-[#252936] active:scale-[0.98] text-slate-200 border border-white/10 font-bold text-sm py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2.5 transition-all shadow-lg"
          >
            <Home size={18} />
            <span>Return Home</span>
          </button>
          </Link>
        </div>

        {}
        <div className="w-full mt-8 pt-6 border-t border-white/10 text-left">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="w-full flex items-center justify-between p-3.5 bg-[#181a22] hover:bg-[#1e212b] rounded-2xl border border-white/5 transition-colors text-xs font-semibold text-slate-300 uppercase tracking-wider"
          >
            <div className="flex items-center gap-2">
              <Bug size={15} className="text-[#c0fd12]" />
              <span>Developer Diagnostics</span>
              {error?.digest && (
                <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded-full text-slate-400 font-mono">
                  ID: {error.digest.slice(0, 8)}
                </span>
              )}
            </div>
            {showDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {/* Collapsible Tech Stack Trace */}
          {showDetails && (
            <div className="mt-3 bg-[#0a0b0e] border border-white/10 rounded-2xl p-4 font-mono text-xs text-slate-300 space-y-3 shadow-inner animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-red-400 font-bold truncate">
                  {error?.name || 'Error'}: {error?.message || 'No error message provided'}
                </span>
                <button
                  onClick={copyErrorToClipboard}
                  className="flex items-center gap-1 text-[11px] bg-white/5 hover:bg-white/10 text-slate-300 px-2.5 py-1 rounded-lg transition-colors border border-white/5"
                >
                  {copied ? <Check size={13} className="text-[#c0fd12]" /> : <Copy size={13} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {error?.digest && (
                <div className="text-[11px] text-slate-400">
                  <span className="text-slate-500">Digest Tag:</span> {error.digest}
                </div>
              )}

              <div className="max-h-40 overflow-y-auto text-[11px] leading-relaxed text-slate-400 space-y-1 custom-scrollbar">
                <p className="text-slate-500 font-semibold"> Stack Trace:</p>
                <pre className="whitespace-pre-wrap break-all text-slate-300">
                  {error?.stack || 'No stack trace available for this error context.'}
                </pre>
              </div>
            </div>
          )}
        </div>

        {}
        <div className="w-full mt-6 bg-[#181a22]/60 rounded-2xl p-3.5 border border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Activity size={14} className="text-[#c0fd12]" />
            <span className="font-semibold text-slate-300">System Status:</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <div className="flex items-center gap-1.5" title="API Gateway Online">
              <Server size={12} className="text-emerald-400" />
              <span>API: <strong className="text-emerald-400">100%</strong></span>
            </div>

            <div className="flex items-center gap-1.5" title="Database Sync Normal">
              <Database size={12} className="text-emerald-400" />
              <span>DB: <strong className="text-emerald-400">Healthy</strong></span>
            </div>

            <div className="flex items-center gap-1.5" title="Authentication Active">
              <KeyRound size={12} className="text-emerald-400" />
              <span>Auth: <strong className="text-emerald-400">Active</strong></span>
            </div>
          </div>
        </div>

        {/* Footer Support Quick Links */}
        <div className="mt-8 pt-4 border-t border-white/5 w-full flex items-center justify-between text-xs text-slate-400">
          <button 
            onClick={handleReportIssue}
            className="hover:text-[#c0fd12] transition-colors flex items-center gap-1.5"
          >
            <Bug size={14} /> Report Issue
          </button>
          <span>•</span>
          <a href="#" className="hover:text-[#c0fd12] transition-colors flex items-center gap-1.5">
            <LifeBuoy size={14} /> Contact Support
          </a>
          <span>•</span>
          <span className="text-slate-600 font-mono">v2.4.0</span>
        </div>

      </main>

      {}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#181a22] text-white border border-[#c0fd12]/40 backdrop-blur-xl px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="p-1 bg-[#c0fd12] text-black rounded-lg">
            <Sparkles size={16} />
          </div>
          <span className="text-xs sm:text-sm font-medium">{toastMessage}</span>
          <button 
            onClick={() => setToastMessage(null)}
            className="text-slate-400 hover:text-white p-1"
          >
            <X size={14} />
          </button>
        </div>
      )}

    </div>
  );
}