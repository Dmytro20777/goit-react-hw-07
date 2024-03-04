import React from 'react';

const Home = () => {
  const styles = {
    container: {
      minHeight: 'calc(100vh - 50px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
    title: {
      fontWeight: 500,
      fontSize: 48,
    },
    developerInfo: {
      marginTop: 20,
      fontSize: 20,
      color: '#666',
    },
  };

  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.title}>
          Welcome page{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
        <p style={styles.developerInfo}>
          Developed by Jeanne-Paul | Version 1.0.0
        </p>
      </div>
    </>
  );
};

export default Home;
