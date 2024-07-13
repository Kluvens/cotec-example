// // contexts/SettingsContext.tsx
// import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
// import { Settings, SettingsContextType } from '@/types';

// const defaultSettings: Settings = {
//   general: {
//     theme: 'system',
//     alwaysShowCodeWhenUsingDataAnalyst: true,
//     language: 'auto',
//   },
//   voice: {
//     voice: 'Cove',
//   },
// };

// const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

// interface SettingsProviderProps {
//   children: ReactNode;
// }

// export const SettingsProvider: React.FC<SettingsProviderProps> = ({ children }) => {
//   const [settings, setSettings] = useState<Settings>(() => {
//     if (typeof window !== 'undefined') {
//       const savedSettings = localStorage.getItem('settings');
//       return savedSettings ? JSON.parse(savedSettings) : defaultSettings;
//     }
//     return defaultSettings;
//   });

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       localStorage.setItem('settings', JSON.stringify(settings));
//     }
//   }, [settings]);

//   return (
//     <SettingsContext.Provider value={{ settings, setSettings }}>
//       {children}
//     </SettingsContext.Provider>
//   );
// };

// export const useSettings = (): SettingsContextType => {
//   const context = useContext(SettingsContext);
//   if (!context) {
//     throw new Error('useSettings must be used within a SettingsProvider');
//   }
//   return context;
// };
