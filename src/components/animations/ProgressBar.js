import { useContext, useState, useEffect } from 'react'
import DataContext from '../../context/Datacontext'

const ProgressBar = ({ percentage }) => {
  const { dark } = useContext(DataContext)
  
  // Clamp the percentage between 0 and 100 to prevent layout breakage
  const clampedPercentage = Math.min(100, Math.max(0, percentage));
  
  // 1. Initialize the width state at 0%
  const [animatedWidth, setAnimatedWidth] = useState(0);

  // 2. Trigger the width update immediately after the component mounts
  useEffect(() => {
    setAnimatedWidth(clampedPercentage);
  }, [clampedPercentage]);

  const styles = {
    container: {
      height: '5px',
      width: '95%',
      backgroundColor: dark ? '#001240' : '#bdbdbd',
      borderRadius: '7px',
      overflow: 'hidden',
      transition: '150ms ease-in-out 0ms'
    },
    filler: {
      height: '100%',
      background: dark ? 'linear-gradient(25deg, #da90ff 0%, #8e4cff 50%, #7f58ff 100%)' : 'linear-gradient(25deg, #e213fd 0%, #a024ff 50%, #870fff 100%)',
      borderRadius: 'inherit',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      transition: 'width 450ms ease-in-out 0ms' // This will now handle the load animation
    }
  };

  return (
    <div style={styles.container}>
      <div 
        style={{ ...styles.filler, width: `${animatedWidth}%` }} // 3. Use the animated state here
        role="progressbar"
        aria-valuenow={clampedPercentage}
        aria-valuemin="0"
        aria-valuemax="100"
      >
      </div>
    </div>
  );
};

export default ProgressBar;
