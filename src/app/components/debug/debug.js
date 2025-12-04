'use client';
import { useEffect, useState } from 'react';

const Debug = ({ experience, projects }) => {
  const [showDebug, setShowDebug] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Show debug panel if data is missing
    if ((!experience || experience.length === 0) || (!projects || projects.length === 0)) {
      setShowDebug(true);
    }
  }, [experience, projects]);

  if (!mounted) return null;

  const debugInfo = {
    experience: {
      exists: !!experience,
      isArray: Array.isArray(experience),
      length: experience?.length || 0,
      firstItem: experience?.[0] ? 'exists' : 'missing',
      sample: experience?.[0] ? {
        hasFields: !!experience[0].fields,
        fieldKeys: experience[0].fields ? Object.keys(experience[0].fields) : []
      } : null
    },
    projects: {
      exists: !!projects,
      isArray: Array.isArray(projects),
      length: projects?.length || 0,
      firstItem: projects?.[0] ? 'exists' : 'missing',
      sample: projects?.[0] ? {
        hasFields: !!projects[0].fields,
        fieldKeys: projects[0].fields ? Object.keys(projects[0].fields) : []
      } : null
    }
  };

  if (!showDebug) {
    return (
      <button
        onClick={() => setShowDebug(true)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          padding: '10px',
          background: '#333',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          zIndex: 9999
        }}
      >
        Show Debug
      </button>
    );
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        background: 'rgba(0, 0, 0, 0.9)',
        color: 'white',
        padding: '20px',
        borderRadius: '10px',
        maxWidth: '400px',
        maxHeight: '80vh',
        overflow: 'auto',
        zIndex: 9999,
        fontSize: '12px',
        fontFamily: 'monospace'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <h3 style={{ margin: 0 }}>Debug Info</h3>
        <button
          onClick={() => setShowDebug(false)}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px'
          }}
        >
          ×
        </button>
      </div>
      <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
        {JSON.stringify(debugInfo, null, 2)}
      </pre>
    </div>
  );
};

export default Debug;

