import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { defaultLocale, dynamicActivate } from '../i18';
import { useEffect, useState } from 'react';
import { Container } from './Container';

export const LingUIProvider: React.FC = ({ children }) => {
  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => {
    dynamicActivate(locale);
  }, [locale]);

  return (
    <I18nProvider i18n={i18n}>
      <Container language={locale} onLanguageChange={setLocale} />
    </I18nProvider>
  );
};
