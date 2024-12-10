import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGlobe } from "@fortawesome/free-solid-svg-icons";


function LanguageBox () {
    const langOptions = [
        {value: 1, label: "O'zbekcha"},
        {value: 2, label: "Ўзбекча"},
        {value: 3, label: "Русский"},
        {value: 4, label: "English"},
    ]

    const [showLangOptions, setShowLangOptions] = useState(false)
    const [language, setLanguage] = useState(langOptions[0])

    return (
            <div className="language-box">
                <div 
                    className="action-box" 
                    onClick={() => setShowLangOptions((prev) => !prev)}
                >
                    <FontAwesomeIcon icon={faGlobe} className="icon"/>
                    <p className="language-label">{language.label}</p>
                </div>
                {
                    showLangOptions && 
                    <div className="language-options-box">
                        {langOptions.map((lang, index) => 
                            lang.value != language.value 
                            ? <p 
                                className="language-option"
                                key={"language-option" + index}
                                onClick={() => 
                                    {
                                        setLanguage(lang)
                                        setShowLangOptions(false)
                                    }
                                }
                              >{lang.label}</p> 
                            : null)
                        }
                    </div>
                }    
            </div>

    )
}

export default LanguageBox