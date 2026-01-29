'use client';

import React from 'react';
import { Cloud, renderSimpleIcon, ICloud, SimpleIcon } from 'react-icon-cloud';
import { useTheme } from './ThemeProvider';
import {
  siReact,
  siNextdotjs,
  siTypescript,
  siJavascript,
  siTailwindcss,
  siNodedotjs,
  siGit,
  siGithub,
  siDocker,
  siFigma,
  siMongodb,
  siPostgresql,
  siVercel,
  siAndroid,
  siPython,
  siCplusplus,
  siHtml5,
  siCss,
} from 'simple-icons';

const cloudProps: Omit<ICloud, 'children'> = {
  containerProps: {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 3, // Increased for more spacing/elegance
    activeCursor: 'default',
    tooltip: 'native',
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: '#0000',
    maxSpeed: 0.03, // Slower for more elegance
    minSpeed: 0.01,
    // dragControl: false,
  },
};

const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === 'light' ? '#f3f2ef' : '#080510';
  const fallbackHex = theme === 'light' ? '#6e6e73' : '#ffffff';
  const minContrastRatio = theme === 'dark' ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: any) => e.preventDefault(),
    },
  });
};

const icons = [
  siReact,
  siNextdotjs,
  siTypescript,
  siJavascript,
  siTailwindcss,
  siNodedotjs,
  siGit,
  siGithub,
  siDocker,
  siFigma,
  siMongodb,
  siPostgresql,
  siVercel,
  siAndroid,
  siPython,
  siCplusplus,
  siHtml5,
  siCss,
];

export function TechGlobe() {
  const { resolvedTheme } = useTheme();
  // Default to dark if theme is undefined during hydration to avoid mismatch, 
  // or handle mounting state. For simplicity here:
  const theme = resolvedTheme || 'dark';

  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg pb-20 pt-8 ">
      <Cloud {...cloudProps}>
        {icons.map((icon) => renderCustomIcon(icon, theme))}
      </Cloud>
    </div>
  );
}
