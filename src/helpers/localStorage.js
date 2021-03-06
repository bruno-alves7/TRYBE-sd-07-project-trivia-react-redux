export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (error) {
    // ignore write errors
  }
};

// código desenvolvido por Jam Creencia
// https://medium.com/@jrcreencia/persisting-redux-state-to-local-storage-f81eb0b90e7e
