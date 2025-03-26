import { createContext, useContext, useRef, useState } from "react";
import { city, nature } from "../galleryData";

const GalleryContext = createContext({
    cities: '',
    natures: '',
    handleModel: () => { },
    open:'',
    modelDate: '',
    setModelData: () => { },
    modelRef:'',
});
export const GalleryProvider = ({ children }) => {
    const [cities, _setCity] = useState(city);
    const [natures, _setNature] = useState(nature);
    const [open, setOpen] = useState(false);
    const [modelDate, _setModelDate] = useState({ data:[], curr:[]});
    const modelRef = useRef(null);
    const handleModel = () => {
        setOpen(prev=>!prev)
    }
    
    const setModelData = (data) => {
        setTimeout(() => {
            _setModelDate(data)
        },[10])
    }
    const context = {
        cities,
        natures,
        open,
        handleModel,
        modelDate,
        setModelData,
        modelRef,
    }
    return (<GalleryContext.Provider value={context}>
        {children}
    </GalleryContext.Provider>)
}
export const UseGalleryContext = () => useContext(GalleryContext)