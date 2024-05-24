// components/FetchHostname.js
import { useEffect, useState } from 'react';

function FetchHostname({ styles }) {
  const [hostname, setHostname] = useState('');

  useEffect(() => {
    async function fetchAndDisplayHostname() {
      try {
        const response = await fetch('/api/hostname');
        const data = await response.json();
        setHostname(data.hostname);
      } catch (error) {
        console.error('Error fetching hostname:', error);
      }
    }

    fetchAndDisplayHostname();
  }, []);

  return (
    <div className={styles.hostname_ct}>
      HostName&nbsp;:&nbsp;<span className={styles.hostname}>{hostname}</span>
    </div>
  );
}

export default FetchHostname;
