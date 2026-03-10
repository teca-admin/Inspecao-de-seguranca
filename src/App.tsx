/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { 
  ClipboardCheck, 
  ChevronRight, 
  LogOut, 
  User, 
  Lock, 
  LayoutDashboard, 
  ArrowLeft,
  CheckCircle2,
  XCircle,
  Plus,
  Minus,
  Save,
  ChevronDown,
  Building2,
  ShieldCheck,
  Eye,
  EyeOff,
  Maximize,
  Minimize
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SECTORS, Sector, SubSector, InspectionItem, Role } from './constants';

// --- Components ---

const Login = ({ onLogin }: { onLogin: () => void }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'Admin' && password === 'Admin') {
      onLogin();
    } else {
      setError('Credenciais inválidas. Tente Admin/Admin.');
    }
  };

  return (
    <div className="h-[100dvh] w-full overflow-hidden bg-white flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-12">
          <div className="w-16 h-16 bg-black rounded-[15px] flex items-center justify-center mb-4 shadow-lg shadow-black/20">
            <ShieldCheck className="text-white w-8 h-8" />
          </div>
          <h1 className="text-[26px] font-black text-neutral-900 tracking-tighter uppercase">Inspeção de segurança</h1>
          <p className="text-neutral-400 text-[10px] font-bold uppercase tracking-[0.2em] mt-1">Gestão de Operações e Inspeção</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-2 ml-1">Usuário</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-white border border-neutral-200 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all font-medium"
                placeholder="Admin"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-2 ml-1">Senha</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input 
                type={showPassword ? "text" : "password"} 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white border border-neutral-200 rounded-xl py-4 pl-12 pr-12 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all font-medium"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {error && (
            <motion.p 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-red-500 text-[10px] font-black uppercase tracking-widest ml-1"
            >
              {error}
            </motion.p>
          )}

          <button 
            type="submit"
            className="w-full bg-black text-white font-black uppercase tracking-widest py-5 rounded-xl hover:bg-neutral-800 active:scale-[0.98] transition-all mt-4 shadow-xl shadow-black/10"
          >
            Acessar Sistema
          </button>
        </form>
      </div>
      <p className="mt-16 text-neutral-300 text-[12px] font-black uppercase tracking-[0.3em]">v1.0.0</p>
    </div>
  );
};

const Dashboard = ({ onSelectSector, onLogout }: { onSelectSector: (sector: Sector) => void, onLogout: () => void }) => {
  return (
    <div className="h-[100dvh] w-full bg-neutral-50 flex flex-col overflow-hidden">
      <header className="bg-white border-b border-neutral-200 px-6 py-4 flex items-center justify-between z-10 shadow-sm shrink-0">
        <div>
          <h2 className="text-xl font-bold text-neutral-900 tracking-tight">Setores</h2>
          <p className="text-neutral-500 text-[10px] font-bold uppercase tracking-[0.2em]">Selecione para inspecionar</p>
        </div>
        <button 
          onClick={onLogout}
          className="p-2 bg-neutral-100 rounded-full text-neutral-600 hover:bg-neutral-200 transition-colors"
        >
          <LogOut className="w-4 h-4" />
        </button>
      </header>

      <main className="flex-1 flex flex-col w-full">
        {SECTORS.map((sector, index) => (
          <motion.button
            key={sector.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => onSelectSector(sector)}
            className="group flex-1 w-full bg-white border-b border-neutral-200 last:border-b-0 flex items-center px-8 hover:bg-neutral-50 active:bg-neutral-100 transition-all text-left relative overflow-hidden"
          >
            <div className="flex items-center gap-6 z-10">
              <div className="w-12 h-12 bg-[#171717] text-white flex items-center justify-center transition-transform group-hover:scale-110 rounded-[15px]">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-black text-neutral-900 text-xl tracking-tighter uppercase">{sector.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="h-[1px] w-4 bg-neutral-300"></span>
                  <p className="text-neutral-400 text-[10px] font-bold uppercase tracking-widest">{sector.subSectors.length} Áreas de Inspeção</p>
                </div>
              </div>
            </div>
            
            <div className="absolute right-8 opacity-10 group-hover:opacity-100 transition-opacity">
              <ChevronRight className="w-8 h-8 text-black" />
            </div>
            
            {/* Background Numbering for a more professional/brutalist look */}
            <span className="absolute -bottom-4 -right-2 text-8xl font-black text-neutral-100 select-none pointer-events-none group-hover:text-neutral-200 transition-colors">
              0{index + 1}
            </span>
          </motion.button>
        ))}
      </main>
    </div>
  );
};

const SubSectorSelection = ({ sector, onBack, onSelectSubSector }: { sector: Sector, onBack: () => void, onSelectSubSector: (sub: SubSector) => void }) => {
  return (
    <div className="h-[100dvh] w-full bg-neutral-50 flex flex-col overflow-hidden">
      <header className="bg-white border-b border-neutral-200 px-6 py-4 flex items-center gap-4 z-10 shadow-sm shrink-0">
        <button onClick={onBack} className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h2 className="text-xl font-bold text-neutral-900 tracking-tight">{sector.name}</h2>
          <p className="text-neutral-500 text-[10px] font-bold uppercase tracking-[0.2em]">Escolha o Sub-setor</p>
        </div>
      </header>

      <main className="flex-1 flex flex-col w-full overflow-y-auto">
        {sector.subSectors.map((sub, index) => (
          <motion.button
            key={sub.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => onSelectSubSector(sub)}
            className="w-full min-h-[100px] bg-white border-b border-neutral-200 last:border-b-0 flex items-center justify-between px-8 hover:bg-neutral-50 active:bg-neutral-100 transition-all group"
          >
            <div className="flex flex-col items-start">
              <span className="text-[10px] font-black text-neutral-300 uppercase tracking-widest mb-1">Sub-setor {index + 1}</span>
              <span className="font-black text-neutral-900 text-lg uppercase tracking-tighter">{sub.name}</span>
            </div>
            <ChevronRight className="w-6 h-6 text-neutral-300 group-hover:text-black transition-colors" />
          </motion.button>
        ))}
      </main>
    </div>
  );
};

const InspectionForm = ({ subSector, onBack, onSave }: { subSector: SubSector, onBack: () => void, onSave: (data: any) => void }) => {
  const [activeRole, setActiveRole] = useState<Role>('AUX');
  const [responses, setResponses] = useState<Record<string, any>>({});

  const filteredItems = useMemo(() => {
    return subSector.items.filter(item => item.role === activeRole);
  }, [subSector, activeRole]);

  const handleBinaryChange = (itemId: string, value: boolean) => {
    setResponses(prev => ({ ...prev, [itemId]: value }));
  };

  const handleQuantChange = (itemId: string, delta: number) => {
    const current = responses[itemId] || 0;
    setResponses(prev => ({ ...prev, [itemId]: Math.max(0, current + delta) }));
  };

  const isComplete = filteredItems.every(item => responses[item.id] !== undefined);
  const completedCount = filteredItems.filter(item => responses[item.id] !== undefined).length;
  const progress = filteredItems.length > 0 ? (completedCount / filteredItems.length) * 100 : 0;

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <header className="bg-white border-b border-neutral-200 px-6 py-4 flex items-center justify-between sticky top-0 z-20 shadow-sm">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h2 className="text-lg font-bold text-neutral-900 leading-tight">{subSector.name}</h2>
            <p className="text-neutral-500 text-[10px] font-bold uppercase tracking-widest">Inspeção em curso</p>
          </div>
        </div>
        <button 
          onClick={() => onSave(responses)}
          disabled={!isComplete}
          className={`p-3 rounded-xl transition-all ${isComplete ? 'bg-black text-white shadow-lg shadow-black/20' : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'}`}
        >
          <Save className="w-5 h-5" />
        </button>
      </header>

      <div className="bg-white border-b border-neutral-200 sticky top-[73px] z-10">
        <div className="px-6 py-2 flex gap-2">
          {(['AUX', 'OPE'] as Role[]).map(role => (
            <button
              key={role}
              onClick={() => setActiveRole(role)}
              className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeRole === role ? 'bg-black text-white' : 'bg-neutral-100 text-neutral-400'}`}
            >
              {role === 'AUX' ? 'Auxiliar' : 'Operador'}
            </button>
          ))}
        </div>
        
        {/* Progress Bar */}
        <div className="h-1 w-full bg-neutral-100">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-black"
          />
        </div>
        <div className="px-6 py-1.5 flex justify-between items-center">
          <span className="text-[9px] font-black text-neutral-400 uppercase tracking-widest">Progresso</span>
          <span className="text-[9px] font-black text-neutral-900 uppercase tracking-widest">{completedCount} / {filteredItems.length} Itens</span>
        </div>
      </div>

      <main className="flex-1 p-6 space-y-6 max-w-2xl mx-auto w-full pb-24">
        {filteredItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-neutral-400">
            <ClipboardCheck className="w-12 h-12 mb-4 opacity-20" />
            <p className="font-medium">Não aplicável para este perfil.</p>
          </div>
        ) : (
          filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-6 rounded-3xl border border-neutral-200 shadow-sm"
            >
              <h4 className="text-neutral-800 font-semibold leading-relaxed mb-4">{item.label}</h4>
              
              {item.type === 'BINÁRIO' ? (
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleBinaryChange(item.id, true)}
                    className={`flex items-center justify-center gap-2 py-4 rounded-2xl border-2 transition-all ${responses[item.id] === true ? 'bg-emerald-50 border-emerald-500 text-emerald-700' : 'bg-white border-neutral-100 text-neutral-400'}`}
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="font-bold text-sm uppercase tracking-wider">Conforme</span>
                  </button>
                  <button
                    onClick={() => handleBinaryChange(item.id, false)}
                    className={`flex items-center justify-center gap-2 py-4 rounded-2xl border-2 transition-all ${responses[item.id] === false ? 'bg-red-50 border-red-500 text-red-700' : 'bg-white border-neutral-100 text-neutral-400'}`}
                  >
                    <XCircle className="w-5 h-5" />
                    <span className="font-bold text-sm uppercase tracking-wider">Não Conf.</span>
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-between bg-neutral-50 p-4 rounded-2xl border border-neutral-100">
                  <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Desvios</span>
                  <div className="flex items-center gap-6">
                    <button 
                      onClick={() => handleQuantChange(item.id, -1)}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-neutral-200 shadow-sm active:scale-90 transition-transform"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <span className="text-2xl font-mono font-bold w-8 text-center">{responses[item.id] || 0}</span>
                    <button 
                      onClick={() => handleQuantChange(item.id, 1)}
                      className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center shadow-md active:scale-90 transition-transform"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          ))
        )}
      </main>
    </div>
  );
};

const SuccessScreen = ({ onReset }: { onReset: () => void }) => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mb-8 shadow-2xl shadow-emerald-500/40"
      >
        <CheckCircle2 className="text-white w-12 h-12" />
      </motion.div>
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-bold text-white mb-2"
      >
        Inspeção Finalizada
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-neutral-400 mb-12"
      >
        Os dados foram enviados com sucesso para a base de gestão.
      </motion.p>
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        onClick={onReset}
        className="bg-white text-black font-bold px-10 py-4 rounded-2xl hover:bg-neutral-200 transition-colors"
      >
        Nova Inspeção
      </motion.button>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [view, setView] = useState<'LOGIN' | 'DASHBOARD' | 'SUBSECTOR' | 'FORM' | 'SUCCESS'>('LOGIN');
  const [selectedSector, setSelectedSector] = useState<Sector | null>(null);
  const [selectedSubSector, setSelectedSubSector] = useState<SubSector | null>(null);

  const handleLogin = () => setView('DASHBOARD');
  const handleLogout = () => setView('LOGIN');

  const handleSelectSector = (sector: Sector) => {
    setSelectedSector(sector);
    setView('SUBSECTOR');
  };

  const handleSelectSubSector = (sub: SubSector) => {
    setSelectedSubSector(sub);
    setView('FORM');
  };

  const handleSaveForm = (data: any) => {
    console.log('Saving inspection data:', {
      sector: selectedSector?.name,
      subSector: selectedSubSector?.name,
      timestamp: new Date().toISOString(),
      data
    });
    setView('SUCCESS');
  };

  const handleReset = () => {
    setSelectedSector(null);
    setSelectedSubSector(null);
    setView('DASHBOARD');
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((e) => {
        console.error(`Error attempting to enable fullscreen: ${e.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const [isFullscreen, setIsFullscreen] = React.useState(false);

  React.useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <div className="font-sans antialiased text-neutral-900 relative">
      <button
        onClick={toggleFullscreen}
        className="fixed top-4 right-4 z-[100] p-3 bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-full text-neutral-600 hover:text-black hover:bg-white shadow-sm transition-all active:scale-95"
        title={isFullscreen ? "Sair da tela cheia" : "Tela cheia"}
      >
        {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
      </button>
      <AnimatePresence mode="wait">
        {view === 'LOGIN' && (
          <motion.div key="login" exit={{ opacity: 0 }} className="w-full">
            <Login onLogin={handleLogin} />
          </motion.div>
        )}
        {view === 'DASHBOARD' && (
          <motion.div key="dashboard" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full">
            <Dashboard onSelectSector={handleSelectSector} onLogout={handleLogout} />
          </motion.div>
        )}
        {view === 'SUBSECTOR' && selectedSector && (
          <motion.div key="subsector" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full">
            <SubSectorSelection 
              sector={selectedSector} 
              onBack={() => setView('DASHBOARD')} 
              onSelectSubSector={handleSelectSubSector} 
            />
          </motion.div>
        )}
        {view === 'FORM' && selectedSubSector && (
          <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full">
            <InspectionForm 
              subSector={selectedSubSector} 
              onBack={() => setView('SUBSECTOR')} 
              onSave={handleSaveForm} 
            />
          </motion.div>
        )}
        {view === 'SUCCESS' && (
          <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full">
            <SuccessScreen onReset={handleReset} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
