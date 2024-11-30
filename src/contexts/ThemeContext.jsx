import { createContext, useContext, useEffect, useRef, useState } from "react";

const ThemeContext = createContext({
    mode: '',
    setMode: () => { },
    closeNav: () => { },
    openNav: () => { },
    navRef: '',
    contentRef: '',
    containerRef: '',
    barRef: '',
    url: '',
    setLocation:() => {},
})
export const ThemeProvider = ({ children }) => {
    const checkMode = localStorage.getItem('Mode') ? localStorage.getItem('Mode') : localStorage.setItem('Mode', 'light');
    const [mode, _setMode] = useState(checkMode);
    const navRef = useRef(null);
    const contentRef = useRef(null);
    const containerRef = useRef(null);
    const barRef = useRef(null);
    const [url,_setUrl] = useState('')
    const setMode = (mode) => {
        if (mode === 'light') {
            _setMode(mode);
            localStorage.setItem('Mode', mode);
        };
        if (mode === 'dark') {
            _setMode('dark');
            localStorage.setItem('Mode', mode);
        };
        if (mode === 'auto') {
            _setMode('auto');
            localStorage.setItem('Mode', mode);
        }
    }
    const closeNav = () => { 
        if (window.innerWidth <= 767 && navRef.current.classList.contains('showNav','bold')) {
            navRef.current.classList.remove('showNav')
            navRef.current.classList.add('hidden')
            barRef.current.classList.remove('hidden')
            contentRef.current.classList.remove('disable')
        }
    };
    const openNav = () => {
        navRef.current.classList.remove('hidden')
        navRef.current.classList.add('showNav','bold')
        contentRef.current.classList.add('disable')
        barRef.current.classList.add('hidden')
    }
    window.addEventListener('resize', () => { 
        if (window.innerWidth == 768) {
            navRef.current.classList.remove('showNav')
            navRef.current.classList.add('hidden')
            barRef.current.classList.add('hidden')
            contentRef.current.classList.remove('disable')
        } else {
            if (barRef.current && barRef.current.classList.contains('hidden')) {
                barRef.current.classList.remove('hidden')
            }
            
        }
    })
    const setLocation = () => {
        setInterval(() => {
            if (location.pathname == '/') {
                _setUrl('DashBoard')
            } else {
                const pathname = location.pathname;
                const modifiedPathname = pathname.replace(/^\/+/, ''); 
                _setUrl(modifiedPathname)
            }
        }, [10])
    }
    useEffect(() => {
        setLocation()
    },[])
    const context = {
        mode,
        setMode,
        closeNav,
        navRef,
        openNav,
        contentRef,
        containerRef,
        barRef,
        url,
        setLocation,
    }
    return (
        <ThemeContext.Provider value={context}>
            {children}
        </ThemeContext.Provider>
    )
}
export const UseThemeContext = () => useContext(ThemeContext);