import { ColourModeContext, colourModeContext, useMode } from './theme';
// CssBaseline will reset css to defaults and ThemeProvider gives us the ability to pass the themes into material UI
import { CssBaseline, ThemeProvider } from '@mui/material';

import Topbar from './scenes/global/Topbar';

function App() {

  const [theme, colourMode] = useMode();

  return (
    <ColourModeContext.Provider value={colourMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="App">
          <main className='content'>
            <Topbar />
          </main>
        </div>
      </ThemeProvider>
    </ColourModeContext.Provider>
  );
}

export default App;
