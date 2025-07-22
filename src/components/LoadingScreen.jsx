import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const LoadingScreen = ({ onFinish }) => {
  const { isDarkMode } = useTheme();

  const cybersecurityQuotes = [
    "Security is a process. – Bruce Schneier",
    "Think before you click. – Unknown",
    "Trust, but verify. – Ronald Reagan",
    "Privacy is power. – Edward Snowden",
    "Hackers never sleep. – Kevin Mitnick",
    "Beware the human factor. – Kevin Mitnick",
    "No system is safe. – Anonymous",
    "Passwords are like underwear. – Chris Pirillo",
    "Eternal vigilance is freedom. – Thomas Jefferson",
    "Encryption matters. – Edward Snowden",
    "Click smart. Stay safe. – Anti-Phishing Working Group",
    "Humans are the weakest link. – Kevin Mitnick",
    "Every system has flaws. – Bruce Schneier",
    "Cybersecurity is everyone’s job. – Stephane Nappo",
    "Security through obscurity fails. – Kerckhoffs’ Principle",
    "No patch? No peace. – Security Community",
    "Online trust is earned. – Stephane Nappo",
    "Zero trust, full security. – Forrester Principle",
    "Attackers don’t knock. – Anonymous",
    "Update or get owned. – Cybersecurity Meme",
    "Phishers love ignorance. – APWG",
    "Your data is gold. – Cybersecurity Experts",
    "Breaches start with trust. – Bruce Schneier",
    "Risk is everywhere. – Kevin Mitnick",
    "Weak passwords kill. – Security Tip",
    "Patch fast. Stay safe. – Cyber Hygiene",
    "Data leaks hurt. – Anonymous",
    "Social hacks win. – Kevin Mitnick",
    "Think like a hacker. – Bruce Schneier",
    "Don't trust. Verify everything. – Zero Trust Model",
    "Is your password strong?",
    "Would you click that link?",
    "Do you trust this email?",
    "Are you using 2FA?",
    "Who’s watching your data?",
    "Is that website secure?",
    "Do you reuse passwords?",
    "Would you spot a phish?",
    "Are your devices updated?",
    "Could you be the weak link?",
    "Would you recognize a scam?",
    "Do you lock your screen?",
    "Are you using public Wi-Fi?",
    "Do you check the sender?",
    "Is your software patched?",
    "Is that really your bank?",

  ];

  const [currentQuote, setCurrentQuote] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Pick quote immediately
    const randomIndex = Math.floor(Math.random() * cybersecurityQuotes.length);
    setCurrentQuote(cybersecurityQuotes[randomIndex]);

    // Delay removal for 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onFinish) onFinish();
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} flex items-center justify-center z-50`}>
      <div className="flex flex-col items-center justify-center space-y-8 px-4">
        {/* Logo */}
        <img 
          src={isDarkMode ? "/dark round.png" : "/round logo.png"} 
          alt="Logo" 
          className="w-24 h-24 object-contain"
          style={{ 
            animation: 'logoBreath 3s ease-in-out infinite'
          }} 
        />

        {/* Quote */}
        <p className={`text-sm text-center italic leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          "{currentQuote}"
        </p>
      </div>

      <style jsx>{`
        @keyframes logoBreath {
          0%, 100% { transform: scale(1); opacity: 0.95; }
          50% { transform: scale(1.05); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
