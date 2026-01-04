import React, { useState, useEffect } from 'react';
import './SpeedTest.css';

const SpeedTest = () => {
  const [results, setResults] = useState({
    ping: null,
    download: null,
    upload: null,
    jitter: null
  });
  const [isTesting, setIsTesting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTest, setCurrentTest] = useState('');
  const [connectionInfo, setConnectionInfo] = useState({});

  useEffect(() => {
    // Get connection information
    if ('connection' in navigator) {
      const conn = navigator.connection;
      setConnectionInfo({
        type: conn.effectiveType || 'Unknown',
        downlink: conn.downlink || 'Unknown',
        rtt: conn.rtt || 'Unknown'
      });
    }
  }, []);

  const measurePing = async () => {
    const pings = [];
    for (let i = 0; i < 5; i++) {
      const start = performance.now();
      try {
        await fetch('https://www.google.com/favicon.ico', {
          method: 'HEAD',
          cache: 'no-cache',
          mode: 'no-cors'
        });
        const end = performance.now();
        pings.push(end - start);
      } catch {
        pings.push(1000); // Default high ping on error
      }
    }

    const avgPing = pings.reduce((a, b) => a + b) / pings.length;
    const jitter = Math.sqrt(
      pings.reduce((sum, ping) => sum + Math.pow(ping - avgPing, 2), 0) / pings.length
    );

    return { ping: Math.round(avgPing), jitter: Math.round(jitter) };
  };

  const measureDownload = async (updateProgress) => {
    const testSizes = [1024, 2048, 4096]; // KB
    const speeds = [];

    for (let i = 0; i < testSizes.length; i++) {
      const size = testSizes[i];
      updateProgress(20 + (i * 20));

      const start = performance.now();
      try {
        const response = await fetch(`https://httpbin.org/stream/${size}`, {
          cache: 'no-cache'
        });
        await response.blob();
        const end = performance.now();

        const duration = (end - start) / 1000; // seconds
        const bits = size * 8 * 1024; // bits
        const speedMbps = (bits / duration) / 1000000;
        speeds.push(speedMbps);
      } catch {
        speeds.push(0);
      }
    }

    const avgSpeed = speeds.reduce((a, b) => a + b) / speeds.length;
    return Math.max(0, avgSpeed);
  };

  const measureUpload = async (updateProgress) => {
    const testSizes = [512, 1024, 2048]; // KB
    const speeds = [];

    for (let i = 0; i < testSizes.length; i++) {
      const size = testSizes[i];
      updateProgress(60 + (i * 15));

      const data = new Uint8Array(size * 1024);
      for (let j = 0; j < data.length; j++) {
        data[j] = Math.random() * 256;
      }

      const start = performance.now();
      try {
        await fetch('https://httpbin.org/post', {
          method: 'POST',
          body: data,
          cache: 'no-cache'
        });
        const end = performance.now();

        const duration = (end - start) / 1000;
        const bits = size * 8 * 1024;
        const speedMbps = (bits / duration) / 1000000;
        speeds.push(speedMbps);
      } catch {
        speeds.push(0);
      }
    }

    const avgSpeed = speeds.reduce((a, b) => a + b) / speeds.length;
    return Math.max(0, avgSpeed);
  };

  const runSpeedTest = async () => {
    setIsTesting(true);
    setProgress(0);
    setResults({ ping: null, download: null, upload: null, jitter: null });

    try {
      // Ping test
      setCurrentTest('Testing ping...');
      setProgress(10);
      const pingResult = await measurePing();

      // Download test
      setCurrentTest('Testing download speed...');
      const downloadSpeed = await measureDownload((p) => setProgress(p));

      // Upload test
      setCurrentTest('Testing upload speed...');
      const uploadSpeed = await measureUpload((p) => setProgress(p));

      setProgress(100);
      setCurrentTest('Test completed!');

      setResults({
        ping: pingResult.ping,
        download: downloadSpeed.toFixed(2),
        upload: uploadSpeed.toFixed(2),
        jitter: pingResult.jitter
      });

      setTimeout(() => setCurrentTest(''), 2000);

    } catch (error) {
      console.error('Speed test failed:', error);
      setCurrentTest('Test failed. Please check your connection.');
      setTimeout(() => setCurrentTest(''), 3000);
    } finally {
      setTimeout(() => {
        setIsTesting(false);
        setProgress(0);
      }, 2000);
    }
  };

  const getSpeedLabel = (speed, type) => {
    if (!speed) return 'Not tested';
    const numSpeed = parseFloat(speed);
    if (type === 'ping') {
      if (numSpeed < 50) return 'Excellent';
      if (numSpeed < 100) return 'Good';
      return 'Poor';
    } else {
      if (numSpeed > 50) return 'Excellent';
      if (numSpeed > 10) return 'Good';
      return 'Poor';
    }
  };

  return (
    <div className="speed-test-container">
      <div className="speed-test-header">
        <h1>🌐 Internet Speed Test</h1>
        <p>Test your connection speed and network quality</p>
      </div>

      <div className="connection-info">
        <h3>Connection Info</h3>
        <div className="info-grid">
          <div className="info-item">
            <span className="label">Status:</span>
            <span className={`value ${navigator.onLine ? 'online' : 'offline'}`}>
              {navigator.onLine ? '🟢 Online' : '🔴 Offline'}
            </span>
          </div>
          <div className="info-item">
            <span className="label">Network:</span>
            <span className="value">{connectionInfo.type || 'Unknown'}</span>
          </div>
          <div className="info-item">
            <span className="label">Estimated Speed:</span>
            <span className="value">{connectionInfo.downlink ? `${connectionInfo.downlink} Mbps` : 'Unknown'}</span>
          </div>
          <div className="info-item">
            <span className="label">Latency:</span>
            <span className="value">{connectionInfo.rtt ? `${connectionInfo.rtt} ms` : 'Unknown'}</span>
          </div>
        </div>
      </div>

      <div className="test-controls">
        <button
          onClick={runSpeedTest}
          disabled={isTesting}
          className={`test-button ${isTesting ? 'testing' : ''}`}
        >
          {isTesting ? '🔄 Testing...' : '🚀 Start Speed Test'}
        </button>

        {isTesting && (
          <div className="progress-container">
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="progress-text">{currentTest}</p>
          </div>
        )}
      </div>

      <div className="results-grid">
        <div className="result-card">
          <div className="result-icon">📡</div>
          <div className="result-content">
            <h3>Ping</h3>
            <div className={`result-value ${getSpeedLabel(results.ping, 'ping').toLowerCase()}`}>
              {results.ping ? `${results.ping} ms` : '--'}
            </div>
            <div className="result-label">{getSpeedLabel(results.ping, 'ping')}</div>
            {results.jitter && (
              <div className="result-subtext">Jitter: {results.jitter} ms</div>
            )}
          </div>
        </div>

        <div className="result-card">
          <div className="result-icon">⬇️</div>
          <div className="result-content">
            <h3>Download</h3>
            <div className={`result-value ${getSpeedLabel(results.download, 'speed').toLowerCase()}`}>
              {results.download ? `${results.download} Mbps` : '--'}
            </div>
            <div className="result-label">{getSpeedLabel(results.download, 'speed')}</div>
          </div>
        </div>

        <div className="result-card">
          <div className="result-icon">⬆️</div>
          <div className="result-content">
            <h3>Upload</h3>
            <div className={`result-value ${getSpeedLabel(results.upload, 'speed').toLowerCase()}`}>
              {results.upload ? `${results.upload} Mbps` : '--'}
            </div>
            <div className="result-label">{getSpeedLabel(results.upload, 'speed')}</div>
          </div>
        </div>
      </div>

      <div className="test-info">
        <h3>📊 How it works</h3>
        <ul>
          <li><strong>Ping:</strong> Measures latency to test responsiveness</li>
          <li><strong>Download:</strong> Tests how fast data comes to your device</li>
          <li><strong>Upload:</strong> Tests how fast data goes from your device</li>
          <li><strong>Jitter:</strong> Measures ping consistency (lower is better)</li>
        </ul>
        <p className="disclaimer">
          Results are approximate and may vary based on network conditions,
          server load, and other factors.
        </p>
      </div>
    </div>
  );
};

export default SpeedTest;