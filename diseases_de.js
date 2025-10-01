window.diseases_de = [
    {
        "name": {
            "hu": "Purulens meningitis (felnőtt)",
            "en": "Purulent meningitis (adult)",
            "de": "Purulente Meningitis (Erwachsene)"
        },
        "category": "CNS",
        "commonPathogens": [
            "Streptococcus pneumoniae",
            "Neisseria meningitidis",
            "Listeria monocytogenes"
        ],
        "empiricalTherapy": {
            "firstLine": "Ceftriaxone 2g IV 12h + Ampicillin 2g IV 4h (>50 év)",
            "alternative": "Meropenem 2g IV 8h + Ampicillin (>50 év)",
            "duration": "10-14 nap (S. pneumoniae, N. meningitidis), 21 nap (L. monocytogenes)"
        },
        "targetedTherapy": {
            "S. pneumoniae (MIC ≤0.06)": "Penicillin G 4 MU IV 4h, 10-14 nap",
            "S. pneumoniae (MIC 0.12-1)": "Ceftriaxone 2g IV 12h, 10-14 nap",
            "S. pneumoniae (MIC ≥2)": "Vancomycin + Ceftriaxone, 10-14 nap",
            "N. meningitidis": "Penicillin G 4 MU IV 4h, 7 nap vagy Ceftriaxone 2g IV 12h, 7 nap",
            "L. monocytogenes": "Ampicillin 2g IV 4h + Gentamicin 5mg/kg IV 24h, 21 nap"
        },
        "notes": {
            "hu": "Dexamethasone 0.15mg/kg IV 6h 2-4 napig (S. pneumoniae esetén), ampicillin >50 év vagy immunszuppresszió esetén",
            "en": "Dexamethasone 0.15mg/kg IV 6h for 2-4 days (for S. pneumoniae), ampicillin for >50 years or immunosuppression",
            "de": "Dexamethason 0,15mg/kg IV 6h für 2-4 Tage (bei S. pneumoniae), Ampicillin bei >50 Jahren oder Immunsuppression"
        }
    },
    {
        "name": {
            "hu": "Purulens meningitis (újszülött)",
            "en": "Purulent meningitis (newborn)",
            "de": "Purulente Meningitis (Neugeborene)"
        },
        "category": "CNS",
        "commonPathogens": [
            "Group B Streptococcus",
            "E. coli",
            "Listeria monocytogenes"
        ],
        "empiricalTherapy": {
            "firstLine": "Ampicillin 50mg/kg IV 8h + Cefotaxime 50mg/kg IV 8h",
            "alternative": "Ampicillin + Gentamicin 2.5mg/kg IV 8h",
            "duration": "14-21 nap"
        },
        "targetedTherapy": {
            "GBS": "Penicillin G vagy Ampicillin",
            "E. coli": "Cefotaxime vagy Gentamicin",
            "L. monocytogenes": "Ampicillin + Gentamicin"
        },
        "notes": {
            "hu": "Lumbal punctio ismétlése 24-48h után",
            "en": "Repeat lumbar puncture after 24-48h",
            "de": "Lumbalpunktion nach 24-48h wiederholen"
        }
    },
    {
        "name": {
            "hu": "CAP - Otthon kezelhető (alacsony rizikó)",
            "en": "CAP - Outpatient treatment (low risk)",
            "de": "CAP - Ambulante Behandlung (niedriges Risiko)"
        },
        "category": "Respiratory",
        "commonPathogens": [
            "S. pneumoniae",
            "H. influenzae",
            "M. pneumoniae",
            "C. pneumoniae"
        ],
        "empiricalTherapy": {
            "firstLine": "Amoxicillin 1g PO 8h (egészséges felnőtt)",
            "alternative": "Azithromycin 500mg PO 24h, 3 nap vagy Doxycycline 100mg PO 12h",
            "duration": "5 nap"
        },
        "targetedTherapy": {
            "S. pneumoniae": "Amoxicillin 1g PO 8h, 5 nap",
            "H. influenzae": "Amoxicillin-clavulanate 875/125mg PO 12h, 5 nap",
            "M. pneumoniae": "Azithromycin 500mg PO 24h, 6 nap",
            "C. pneumoniae": "Doxycycline 100mg PO 12h, 14 nap"
        },
        "notes": {
            "hu": "CURB-65 score 0-1, nincs komorbiditás, <65 év, stabil vitális paraméterek",
            "en": "CURB-65 score 0-1, no comorbidities, <65 years, stable vital signs",
            "de": "CURB-65 Score 0-1, keine Komorbiditäten, <65 Jahre, stabile Vitalzeichen"
        }
    },
    {
        "name": {
            "hu": "CAP - Otthon kezelhető (magas rizikó)",
            "en": "CAP - Outpatient treatment (high risk)",
            "de": "CAP - Ambulante Behandlung (hohes Risiko)"
        },
        "category": "Respiratory",
        "commonPathogens": [
            "S. pneumoniae",
            "H. influenzae",
            "M. pneumoniae",
            "C. pneumoniae",
            "S. aureus"
        ],
        "empiricalTherapy": {
            "firstLine": "Amoxicillin-clavulanate 875/125mg PO 12h +/- Azithromycin 500mg PO 24h",
            "alternative": "cefuroxim 500mg PO 12h +/- Azithromycin 500mg PO 24h",
            "duration": "5-7 nap"
        },
        "targetedTherapy": {
            "S. pneumoniae": "Amoxicillin-clavulanate + Azithromycin",
            "H. influenzae": "Amoxicillin-clavulanate",
            "Atípusos patogének": "Azithromycin vagy Levofloxacin"
        },
        "notes": {
            "hu": "Komorbiditások (COPD, diabetes, szívbetegség, alkoholizmus), >65 év, antibiotikum használat 90 napon belül",
            "en": "Comorbidities (COPD, diabetes, heart disease, alcoholism), >65 years, antibiotic use within 90 days",
            "de": "Komorbiditäten (COPD, Diabetes, Herzkrankheit, Alkoholismus), >65 Jahre, Antibiotikaeinsatz innerhalb von 90 Tagen"
        }
    },
    {
        "name": {
            "hu": "CAP - Kórházban kezelhető (nem súlyos)",
            "en": "CAP - Inpatient treatment (non severe)",
            "de": "CAP - Stationäre Behandlung (nicht schwer)"
        },
        "category": "Respiratory",
        "commonPathogens": [
            "S. pneumoniae",
            "H. influenzae",
            "Legionella",
            "S. aureus",
            "Enterobacteriaceae"
        ],
        "empiricalTherapy": {
            "firstLine": "amoxicillin-clavulanate 875/125mg IV 12h +/- Azithromycin 500mg IV 24h",
            "alternative": "Ceftriaxone 1g IV 24h +/- Azithromycin 500mg IV 24h",
            "duration": "5-7 nap"
        },
        "targetedTherapy": {
            "S. pneumoniae": "Ceftriaxone 2g IV 24h, 5 nap",
            "Legionella": "Azithromycin 500mg IV 24h, 5-10 nap",
            "S. aureus (MSSA)": "Cefazolin 2g IV 8h, 7 nap"
        },
        "notes": {
            "hu": "CURB-65 pontszám 2, komorbiditások, nem képes orális gyógyszer szedésére",
            "en": "CURB-65 score 2, comorbidities, unable to take oral medication",
            "de": "CURB-65-Score 2, Komorbiditäten, nicht in der Lage, orale Medikamente einzunehmen"
        }
    },
    {
        "name": {
            "hu": "CAP - Intenzív osztályon kezelendő",
            "en": "CAP - Requires intensive care",
            "de": "CAP - Intensivpflichtig"
        },
        "category": "Respiratory",
        "commonPathogens": [
            "S. pneumoniae",
            "Legionella",
            "S. aureus",
            "P. aeruginosa",
            "Enterobacteriaceae"
        ],
        "empiricalTherapy": {
            "firstLine": "Ceftriaxone 2g IV 24h + Azithromycin 500mg IV 24h (béta-laktám + makrolid)",
            "alternative": "Levofloxacin 750mg IV 24h + Ceftriaxone 2g IV 24h (fluorokinolon + béta-laktám)",
            "duration": "7-10 nap"
        },
        "targetedTherapy": {
            "S. pneumoniae": "Ceftriaxone 2g IV 24h + Azithromycin",
            "Legionella": "Azithromycin 500mg IV 24h vagy Levofloxacin 750mg IV 24h",
            "P. aeruginosa rizikó": "Piperacillin-tazobactam 4.5g IV 6h + Ciprofloxacin 400mg IV 12h"
        },
        "notes": {
            "hu": "CURB-65 pontszám ≥3, szeptikus sokk, lélegeztetés, P. aeruginosa rizikó: strukturális tüdőbetegség, ismételt iv antibiotikum kezelés 3 hónapon belül",
            "en": "CURB-65 score ≥3, septic shock, mechanical ventilation, P. aeruginosa risk: structural lung disease, repeated IV antibiotic use within 3 months",
            "de": "CURB-65-Score ≥3, septischer Schock, Beatmung, P. aeruginosa-Risiko: strukturelle Lungenerkrankung, wiederholter IV-Antibiotikaeinsatz innerhalb von 3 Monaten"
        }
    },
    {
        "name": {
            "hu": "HAP (kórházban szerzett pneumonia) - Alacsony MDR rizikó",
            "en": "HAP (Hospital-Acquired Pneumonia) - Low MDR risk",
            "de": "HAP (nosokomiale Pneumonie) - Niedriges MDR-Risiko"
        },
        "category": "Respiratory",
        "commonPathogens": [
            "S. pneumoniae",
            "H. influenzae",
            "MSSA",
            "Enterobacteriaceae"
        ],
        "empiricalTherapy": {
            "firstLine": "Ceftriaxone 2g IV 24h vagy Levofloxacin 750mg IV 24h",
            "alternative": "Ampicillin-sulbactam 3g IV 6h",
            "duration": "7 nap"
        },
        "targetedTherapy": {
            "S. pneumoniae": "Ceftriaxone 2g IV 24h, 7 nap",
            "MSSA": "Cefazolin 2g IV 8h, 7 nap",
            "Enterobacteriaceae": "Ceftriaxone vagy Levofloxacin, 7 nap"
        },
        "notes": {
            "hu": "≥48 óra kórházi tartózkodás, nincs MDR rizikófaktor, nem lélegeztetett",
            "en": "≥48 hours hospital stay, no MDR risk factor, not ventilated",
            "de": "≥48 Stunden Krankenhausaufenthalt, kein MDR-Risikofaktor, nicht beatmet"
        }
    },
    {
        "name": {
            "hu": "HAP (kórházban szerzett pneumonia) - Magas MDR rizikó",
            "en": "HAP (Hospital-Acquired Pneumonia) - High MDR risk",
            "de": "HAP (nosokomiale Pneumonie) - Hohes MDR-Risiko"
        },
        "category": "Respiratory",
        "commonPathogens": [
            "P. aeruginosa",
            "K. pneumoniae (ESBL)",
            "A. baumannii",
            "MRSA"
        ],
        "empiricalTherapy": {
            "firstLine": "Piperacillin-tazobactam 4.5g IV 6h +/- Vancomycin 15-20mg/kg IV 8-12h (MRSA gyanú esetén)",
            "alternative": "Meropenem 2g IV 8h +/- Linezolid 600mg IV 12h (MRSA gyanú esetén)",
            "duration": "7 nap"
        },
        "targetedTherapy": {
            "P. aeruginosa": "Piperacillin-tazobactam + Amikacin 15mg/kg IV 24h, 7 nap",
            "ESBL": "Meropenem 2g IV 8h, 7 nap",
            "MRSA": "Vancomycin (15-20mg/kg) vagy Linezolid, 7 nap"
        },
        "notes": {
            "hu": "MDR rizikófaktorok: >5 nap hospitalizáció, IV antibiotikum 90 napon belül, magas helyi MDR prevalencia",
            "en": "MDR risk factors: >5 days hospitalization, IV antibiotics within 90 days, high local MDR prevalence",
            "de": "MDR-Risikofaktoren: >5 Tage Hospitalisierung, IV-Antibiotika innerhalb von 90 Tagen, hohe lokale MDR-Prävalenz"
        }
    },
    {
        "name": {
            "hu": "VAP (lélegeztető géphez társuló pneumonia) - Korai (<5 nap)",
            "en": "VAP (Ventilator-Associated Pneumonia) - Early (<5 days)",
            "de": "VAP (beatmungsassoziierte Pneumonie) - Früh (<5 Tage)"
        },
        "category": "Respiratory",
        "commonPathogens": [
            "S. pneumoniae",
            "H. influenzae",
            "MSSA",
            "Enterobacteriaceae"
        ],
        "empiricalTherapy": {
            "firstLine": "Ceftriaxone 2g IV 24h",
            "alternative": "Levofloxacin 750mg IV 24h vagy Ampicillin-sulbactam 3g IV 6h",
            "duration": "7 nap"
        },
        "targetedTherapy": {
            "S. pneumoniae": "Ceftriaxone 2g IV 24h, 7 nap",
            "MSSA": "Cefazolin 2g IV 8h, 7 nap",
            "Enterobacteriaceae": "Ceftriaxone, 7 nap"
        },
        "notes": {
            "hu": "<5 nap lélegeztetés, nincs MDR rizikófaktor",
            "en": "<5 days ventilation, no MDR risk factor",
            "de": "<5 Tage Beatmung, kein MDR-Risikofaktor"
        }
    },
    {
        "name": {
            "hu": "VAP (lélegeztető géphez társuló pneumonia) - Késői (≥5 nap)",
            "en": "VAP (Ventilator-Associated Pneumonia) - Late (≥5 days)",
            "de": "VAP (beatmungsassoziierte Pneumonie) - Spät (≥5 Tage)"
        },
        "category": "Respiratory",
        "commonPathogens": [
            "P. aeruginosa",
            "A. baumannii",
            "K. pneumoniae (ESBL/KPC)",
            "MRSA"
        ],
        "empiricalTherapy": {
            "firstLine": "Meropenem 2g IV 8h + Vancomycin 15-20mg/kg IV 8-12h + Amikacin 15mg/kg IV 24h",
            "alternative": "Ceftazidime-avibactam 2.5g IV 8h + Linezolid 600mg IV 12h",
            "duration": "7 nap"
        },
        "targetedTherapy": {
            "P. aeruginosa (MDR)": "Ceftazidime-avibactam + Amikacin, 7 nap",
            "A. baumannii (XDR)": "Colistin + Meropenem + Ampicillin-sulbactam, 7-14 nap",
            "KPC": "Meropenem-vaborbactam vagy Ceftazidime-avibactam, 7 nap",
            "MRSA": "Vancomycin (trough 15-20) vagy Linezolid, 7 nap"
        },
        "notes": {
            "hu": "≥5 nap lélegeztetés, kombinált terápia MDR patogének ellen, de-eszkaláció tenyésztés alapján",
            "en": "≥5 days ventilation, combination therapy against MDR pathogens, de-escalation based on culture",
            "de": "≥5 Tage Beatmung, Kombinationstherapie gegen MDR-Erreger, Deeskalation nach Kultur"
        }
    },
    {
        "name": {
            "hu": "Infektív endocarditis (natív billentyű) - Akut",
            "en": "Infective endocarditis (native valve) - Acute",
            "de": "Infektiöse Endokarditis (native Klappe) - Akut"
        },
        "category": "Cardiovascular",
        "commonPathogens": [
            "S. aureus",
            "alfa-hemolytic streptococci",
            "Enterococci",
            "HACEK"
        ],
        "empiricalTherapy": {
            "firstLine": "Amoxicillin clavulanate 875/125mg IV 12h + Ceftriaxone 2g IV 12h",
            "alternative": "Daptomycin 8-10mg/kg IV 24h + Ceftriaxone 2g IV 12h",
            "duration": "4-6 hét (patogén függő)"
        },
        "targetedTherapy": {
            "S. aureus (MSSA)": "Flucloxacillin 2g IV 4h, vagy cefazolin 2g IV 8h, 6 hét (± Gentamicin 3mg/kg IV 24h első 3-5 nap)",
            "S. aureus (MRSA)": "Vancomycin 15-20mg/kg IV 8-12h, 6 hét vagy Daptomycin 8-10mg/kg IV 24h, 6 hét",
            "Viridans streptococci (MIC ≤0.125)": "Penicillin G 12-18 MU IV/nap, 4 hét vagy Ceftriaxone 2g IV 24h, 4 hét",
            "Viridans streptococci (MIC >0.125)": "Penicillin G + Gentamicin 3mg/kg IV 24h, 6 hét",
            "Enterococcus faecalis": "Ampicillin 2g IV 4h + Gentamicin 3mg/kg IV 24h, 6 hét",
            "HACEK": "Ceftriaxone 2g IV 24h, 6 hét",
                    },
        "notes": {
            "hu": "TEE kötelező, sebészeti konzílium indikációk: szívelégtelenség, abszcesszus, nagy vegetáció (>10mm), ismételt embolizáció",
            "en": "TEE mandatory, surgical consultation indications: heart failure, abscess, large vegetation (>10mm), recurrent embolization",
            "de": "TEE obligatorisch, Indikationen für chirurgische Konsultation: Herzinsuffizienz, Abszess, große Vegetation (>10mm), wiederkehrende Embolisierung"
        }
    },
    {
        "name": {
            "hu": "Infektív endocarditis (natív billentyű) - Szubakut",
            "en": "Infective endocarditis (native valve) - Subacute",
            "de": "Infektiöse Endokarditis (native Klappe) - Subakut"
        },
        "category": "Cardiovascular",
        "commonPathogens": [
            "Viridans streptococci",
            "Enterococci",
            "HACEK",
            "Bartonella",
            "Coxiella"
        ],
        "empiricalTherapy": {
            "firstLine": "Ampicillin 2g IV 4h + Gentamicin 3mg/kg IV 24h",
            "alternative": "Ceftriaxone 2g IV 24h + Vancomycin 15-20mg/kg IV 8-12h",
            "duration": "4-6 hét"
        },
        "targetedTherapy": {
            "Viridans streptococci": "Penicillin G 12-18 MU IV/nap, 4 hét",
            "Enterococcus": "Ampicillin + Gentamicin, 6 hét",
            "HACEK": "Ceftriaxone 2g IV 24h, 6 hét",
            "Bartonella": "Doxycycline 100mg PO 12h + Gentamicin, 6 hét",
            "Coxiella burnetii": "Doxycycline + Hydroxychloroquine, 18 hónap"
        },
        "notes": {
            "hu": "Lassú progresszió, gyakran előzetesen károsodott billentyű, TEE ajánlott",
            "en": "Slow progression, often previously damaged valve, TEE recommended",
            "de": "Langsame Progression, häufig vorgeschädigte Klappe, TEE empfohlen"
        }
    },
    {
        "name": {
            "hu": "Infektív endocarditis ( műbillentyű) - Korai (<1 év)",
            "en": "Infective endocarditis (prosthetic valve) - Early (<1 year)",
            "de": "Infektiöse Endokarditis (Prothesenklappe) - Früh (<1 Jahr)"
        },
        "category": "Cardiovascular",
        "commonPathogens": [
            "CoNS",
            "S. aureus",
            "Enterococci",
            "Gram-negatív bacilli"
        ],
        "empiricalTherapy": {
            "firstLine": "Vancomycin 15-20mg/kg IV 8-12h + Gentamicin 3mg/kg IV 24h + Rifampin 300mg PO 12h",
            "alternative": "Daptomycin 10mg/kg IV 24h + Gentamicin + Rifampin",
            "duration": "6 hét"
        },
        "targetedTherapy": {
            "CoNS (methicillin-R)": "Vancomycin + Gentamicin (2 hét) + Rifampin, 6 hét",
            "S. aureus (MSSA)": "Flucloxacillin + Gentamicin (2 hét) + Rifampin, 6 hét",
            "S. aureus (MRSA)": "Vancomycin + Gentamicin (2 hét) + Rifampin, 6 hét",
            "Enterococcus": "Ampicillin + Gentamicin, 6 hét (rifampin nem ajánlott)",
            "Gram-negatív": "Meropenem + Gentamicin, 6 hét"
        },
        "notes": {
            "hu": "Sebészeti kezelés gyakran szükséges, rifampin csak biofilm-képző Gram-pozitív coccusok esetén",
            "en": "Surgical treatment often required, rifampin only for biofilm-forming Gam-positive cocci",
            "de": "Chirurgische Behandlung oft erforderlich, Rifampicin nur bei biofilmbildenden Grampositiven Kokken"
        }
    },
    {
        "name": {
            "hu": "Infektív endocarditis (műbillentyű) - Késői (>1 év)",
            "en": "Infective endocarditis (prosthetic valve) - Late (>1 year)",
            "de": "Infektiöse Endokarditis (Prothesenklappe) - Spät (>1 Jahr)"
        },
        "category": "Cardiovascular",
        "commonPathogens": [
            "Viridans streptococci",
            "Enterococci",
            "S. aureus",
            "CoNS"
        ],
        "empiricalTherapy": {
            "firstLine": "Vancomycin 15-20mg/kg IV 8-12h + Gentamicin 3mg/kg IV 24h + Rifampin 300mg PO 12h",
            "alternative": "Ampicillin 2g IV 4h + Vancomycin + Gentamicin",
            "duration": "6 hét"
        },
        "targetedTherapy": {
            "Viridans streptococci": "Penicillin G + Gentamicin (2 hét), 6 hét",
            "Enterococcus": "Ampicillin + Gentamicin, 6 hét",
            "S. aureus": "Flucloxacillin/Vancomycin + Gentamicin (2 hét) + Rifampin, 6 hét",
            "CoNS": "Vancomycin + Gentamicin (2 hét) + Rifampin, 6 hét"
        },
        "notes": {
            "hu": "Hasonló natív billentyű endocarditishez, de hosszabb kezelési idő és rifampin mérlegelése",
            "en": "Similar to native valve endocarditis, but longer treatment duration and consideration of rifampin",
            "de": "Ähnlich wie bei Endokarditis der nativen Klappe, aber längere Behandlungsdauer und Rifampicin-Abwägung"
        }
    },
    {
        "name": {
            "hu": "Akut cystitis (nők, szövődménymentes)",
            "en": "Acute cystitis (women, uncomplicated)",
            "de": "Akute Zystitis (Frauen, unkompliziert)"
        },
        "category": "Urogenital",
        "commonPathogens": [
            "E. coli",
            "K. pneumoniae",
            "S. saprophyticus",
            "Enterococcus"
        ],
        "empiricalTherapy": {
            "firstLine": "Nitrofurantoin 100mg PO 12h, 5 nap",
            "alternative": "Fosfomycin 3g PO egyszeri vagy TMP-SMX 160/800mg PO 12h, 3 nap",
            "duration": "3-5 nap"
        },
        "targetedTherapy": {
            "E. coli (érzékeny)": "Nitrofurantoin 5 nap vagy TMP-SMX 3 nap",
            "K. pneumoniae": "TMP-SMX 3 nap vagy Ciprofloxacin 250mg PO 12h, 3 nap",
            "S. saprophyticus": "Nitrofurantoin 5 nap",
            "Enterococcus": "Nitrofurantoin 5 nap vagy Amoxicillin 500mg PO 8h, 3 nap"
        },
        "notes": {
            "hu": "Empirikusan a Fluorokinolonok kerülendők, nőknél egyszeri fosfomycin dózis hatékony",
            "en": "Empirically, fluoroquinolones should be avoided, a single dose of fosfomycin is effective in women",
            "de": "Empirisch sollten Fluorchinolone vermieden werden, eine Einzeldosis Fosfomycin ist bei Frauen wirksam"
        }
    },
    {
        "name": {
            "hu": "Akut pyelonephritis (ambuláns)",
            "en": "Acute pyelonephritis (outpatient)",
            "de": "Akute Pyelonephritis (ambulant)"
        },
        "category": "Urogenital",
        "commonPathogens": [
            "E. coli",
            "K. pneumoniae",
            "P. mirabilis",
            "Enterococcus"
        ],
        "empiricalTherapy": {
            "firstLine": "Cefuroxim 500mg PO 12h, 5 nap",
            "alternative": "Levofloxacin 750mg PO 24h, 5 nap",
            "duration": "5-7 nap"
        },
        "targetedTherapy": {
            "E. coli (érzékeny)": "Ceftriaxone 2g IV 24h, 7 nap",
            "K. pneumoniae": "imipenem cilastatin 500mg IV 8h, 7 nap",
            "P. mirabilis": "Ciprofloxacin vagy TMP-SMX, 7 nap",
            "Enterococcus": "Amoxicillin 1g PO 8h, 10-14 nap"
        },
        "notes": {
            "hu": "Ambuláns kezelés: enyhe-közepes tünetek, nincs hányás, nincs szepszis jel",
            "en": "Outpatient treatment: mild-moderate symptoms, no vomiting, no signs of sepsis",
            "de": "Ambulante Behandlung: milde-moderate Symptome, kein Erbrechen, keine Sepsiszeichen"
        }
    },
    {
        "name": {
            "hu": "Akut pyelonephritis",
            "en": "Acute pyelonephritis",
            "de": "Akute Pyelonephritis"
        },
        "category": "Urogenital",
        "commonPathogens": [
            "E. coli",
            "K. pneumoniae (ESBL)",
            "P. mirabilis",
            "Enterococcus",
            "P. aeruginosa"
        ],
        "empiricalTherapy": {
            "firstLine": "Ceftriaxone 2g IV 24h",
            "alternative": "Piperacillin-tazobactam 4.5g IV 8h (szepszis gyanú) vagy Meropenem 1g IV 8h (ESBL rizikó)",
            "duration": "10-14 nap"
        },
        "targetedTherapy": {
            "E. coli": "Ceftriaxone 2g IV 24h, 10-14 nap",
            "K. pneumoniae (ESBL)": "Meropenem 1g IV 8h, 10-14 nap",
            "P. aeruginosa": "Piperacillin-tazobactam + Ciprofloxacin, 14 nap",
            "Enterococcus": "Ampicillin 2g IV 6h, 10-14 nap"
        },
        "notes": {
            "hu": "Hospitalizáció: súlyos tünetek, hányás, szepszis, komorbiditások, terhesség",
            "en": "Hospitalization: severe symptoms, vomiting, sepsis, comorbidities, pregnancy",
            "de": "Hospitalisierung: schwere Symptome, Erbrechen, Sepsis, Komorbiditäten, Schwangerschaft"
        }
    },
    {
        "name": {
            "hu": "Szövődményes UTI",
            "en": "Complicated UTI",
            "de": "Komplizierte HWI"
        },
        "category": "Urogenital",
        "commonPathogens": [
            "E. coli",
            "K. pneumoniae",
            "Enterococcus",
            "P. aeruginosa",
            "Enterobacter"
        ],
        "empiricalTherapy": {
            "firstLine": "Piperacillin-tazobactam 4.5g IV 8h vagy Meropenem 1g IV 8h",
            "alternative": "Ceftazidime 2g IV 8h + Vancomycin 15mg/kg IV 12h",
            "duration": "7-14 nap"
        },
        "targetedTherapy": {
            "E. coli (ESBL)": "Meropenem 1g IV 8h, 7-14 nap",
            "P. aeruginosa": "Piperacillin-tazobactam + Amikacin, 7-14 nap",
            "Enterococcus (VRE)": "Linezolid 600mg IV 12h, 7-14 nap",
            "Enterobacter": "Meropenem 1g IV 8h, 7-14 nap"
        },
        "notes": {
            "hu": "Anatómiai abnormalitás, katéter, immunszuppresszió, diabetes, terhesség, férfi nem",
            "en": "Anatomical abnormality, catheter, immunosuppression, diabetes, pregnancy, male sex",
            "de": "Anatomische Anomalie, Katheter, Immunsuppression, Diabetes, Schwangerschaft, männliches Geschlecht"
        }
    },
    {
        "name": {
            "hu": "Cellulitis (szövődménymentes)",
            "en": "Cellulitis (uncomplicated)",
            "de": "Cellulitis (unkompliziert)"
        },
        "category": "Skin",
        "commonPathogens": [
            "S. pyogenes",
            "S. aureus"
        ],
        "empiricalTherapy": {
            "firstLine": "Flucloxacillin 500mg PO 6h vagy Cefazolin 2g IV 8h",
            "alternative": "Clindamycin 300mg PO 8h",
            "duration": "5-10 nap"
        },
        "targetedTherapy": {
            "S. pyogenes": "Penicillin V vagy Amoxicillin",
            "S. aureus (MSSA)": "Flucloxacillin vagy Cefazolin 2g IV 8h",
            "S. aureus (MRSA)": "Clindamycin vagy Doxycycline"
        },
        "notes": {
            "hu": "MRSA rizikófaktorok: kórházi expozíció, IV droghasználat",
            "en": "MRSA risk factors: hospital exposure, IV drug use",
            "de": "MRSA-Risikofaktoren: Krankenhauskontakt, IV-Drogenkonsum"
        }
    },
    {
        "name": {
            "hu": "Necrotizáló fasciitis",
            "en": "Necrotizing fasciitis",
            "de": "Nekrotisierende Fasziitis"
        },
        "category": "Skin",
        "commonPathogens": [
            "S. pyogenes",
            "Clostridium spp.",
            "Polimikrobiális"
        ],
        "empiricalTherapy": {
            "firstLine": "Clindamycin 600mg IV 8h + Penicillin G 4 MU IV 4h",
            "alternative": "Vancomycin + Piperacillin-tazobactam + Clindamycin",
            "duration": "Sebészeti debridement + 10-14 nap"
        },
        "targetedTherapy": {
            "S. pyogenes": "Penicillin G + Clindamycin",
            "Clostridium": "Penicillin G + Clindamycin",
            "Polimikrobiális": "Piperacillin-tazobactam + Clindamycin"
        },
        "notes": {
            "hu": "Sürgős sebészeti beavatkozás szükséges!",
            "en": "Urgent surgical intervention required!",
            "de": "Dringender chirurgischer Eingriff erforderlich!"
        }
    },
    {
        "name": {
            "hu": "Szepszis és szeptikus sokk (közösségben szerzett)",
            "en": "Sepsis and septic shock (community-acquired)",
            "de": "Sepsis und septischer Schock (gemeinschaftserworben)"
        },
        "category": "Sepsis",
        "commonPathogens": [
            "E. coli",
            "K. pneumoniae",
            "S. pneumoniae",
            "S. aureus",
            "S. pyogenes"
        ],
        "empiricalTherapy": {
            "firstLine": "Piperacillin-tazobactam 4.5g IV 6h + Vancomycin (MRSA gyanú esetén) 15-20mg/kg IV 8-12h (1 órán belül)",
            "alternative": "Meropenem 2g IV 8h + Vancomycin (MRSA gyanú esetén) 15-20mg/kg IV 8-12h",
            "duration": "7-10 nap (forrás kontroll után)"
        },
        "targetedTherapy": {
            "E. coli": "Ceftriaxone 2g IV 24h, 7-10 nap",
            "S. pneumoniae": "Ceftriaxone 2g IV 24h, 7-10 nap",
            "S. aureus (MSSA)": "Flucloxacillin 2g IV 4h, 7-14 nap",
            "S. pyogenes": "Penicillin G 4 MU IV 4h + Clindamycin 600mg IV 8h, 10-14 nap"
        },
        "notes": {
            "hu": "Surviving Sepsis Campaign: antibiotikum 1 órán belül, hemokultúra előtte, forrás kontroll 6-12 órán belül",
            "en": "Surviving Sepsis Campaign: antibiotics within 1 hour, blood culture before, source control within 6-12 hours",
            "de": "Surviving Sepsis Campaign: Antibiotikum innerhalb 1 Stunde, Blutkultur vorher, Quellenkontrolle innerhalb 6-12 Stunden"
        }
    },
    {
        "name": {
            "hu": "Szepszis és szeptikus sokk (kórházi eredetű)",
            "en": "Sepsis and septic shock (hospital-acquired)",
            "de": "Sepsis und septischer Schock (nosokomial)"
        },
        "category": "Sepsis",
        "commonPathogens": [
            "P. aeruginosa",
            "K. pneumoniae (ESBL/KPC)",
            "A. baumannii",
            "MRSA",
            "Enterococcus (VRE)"
        ],
        "empiricalTherapy": {
            "firstLine": "Meropenem 2g IV 8h + Vancomycin 15-20mg/kg IV 8-12h + Amikacin 15mg/kg IV 24h",
            "alternative": "Ceftazidime-avibactam 2.5g IV 8h + Linezolid 600mg IV 12h",
            "duration": "7-10 nap"
        },
        "targetedTherapy": {
            "P. aeruginosa (MDR)": "Ceftazidime-avibactam + Amikacin, 7-10 nap",
            "K. pneumoniae (KPC)": "Meropenem-vaborbactam vagy Ceftazidime-avibactam, 7-10 nap",
            "A. baumannii (XDR)": "Colistin + Meropenem + Ampicillin-sulbactam, 10-14 nap",
            "MRSA": "Vancomycin (trough 15-20) vagy Linezolid, 7-10 nap",
            "VRE": "Linezolid 600mg IV 12h vagy Daptomycin 8-10mg/kg IV 24h, 7-10 nap"
        },
        "notes": {
            "hu": "Kombinált terápia MDR patogének ellen, de-eszkaláció tenyésztés alapján 48-72h után",
            "en": "Combination therapy against MDR pathogens, de-escalation based on culture after 48-72h",
            "de": "Kombinationstherapie gegen MDR-Erreger, Deeskalation nach Kultur nach 48-72h"
        }
    },
    {
        "name": {
            "hu": "Neutropéniás láz",
            "en": "Neutropenic fever",
            "de": "Neutropenisches Fieber"
        },
        "category": "Sepsis",
        "commonPathogens": [
            "P. aeruginosa",
            "E. coli",
            "K. pneumoniae",
            "S. aureus",
            "Enterococcus"
        ],
        "empiricalTherapy": {
            "firstLine": "Piperacillin-tazobactam 4.5g IV 6h vagy Meropenem 1g IV 8h",
            "alternative": "Ceftazidime 2g IV 8h + Vancomycin 15mg/kg IV 12h (MRSA gyanú)",
            "duration": "Neutropenia megszűnéséig + 48h afebrilitásig"
        },
        "targetedTherapy": {
            "P. aeruginosa": "Piperacillin-tazobactam + Amikacin",
            "ESBL": "Meropenem 1g IV 8h",
            "MRSA": "Vancomycin vagy Linezolid",
            "Candida": "+ Caspofungin 50mg IV 24h"
        },
        "notes": {
            "hu": "Antifungális terápia 4-7 nap után ha perzisztáló láz, G-CSF mérlegelése",
            "en": "Antifungal therapy after 4-7 days if persistent fever, consider G-CSF",
            "de": "Antimykotische Therapie nach 4-7 Tagen bei anhaltendem Fieber, G-CSF erwägen"
        }
    },
    {
        "name": {
            "hu": "Spontán bakteriális peritonitis (SBP)",
            "en": "Spontaneous bacterial peritonitis (SBP)",
            "de": "Spontane bakterielle Peritonitis (SBP)"
        },
        "category": "Gastrointestinal",
        "commonPathogens": [
            "E. coli",
            "K. pneumoniae",
            "S. pneumoniae",
            "Enterococcus"
        ],
        "empiricalTherapy": {
            "firstLine": "Ceftriaxone 2g IV 24h",
            "alternative": "Piperacillin-tazobactam 4.5g IV 6h",
            "duration": "5 nap"
        },
        "targetedTherapy": {
            "E. coli": "Ceftriaxone",
            "K. pneumoniae": "imipenem-cilastatin vagy Piperacillin-tazobactam (ESBL rizikó)",
            "S. pneumoniae": "Ceftriaxone vagy Penicillin G",
            "Enterococcus": "Ampicillin"
        },
        "notes": {
            "hu": "Ascites PMN >250/µL, albumin pótlás 1,5g/kg 1. nap, 1g/kg 3. nap",
            "en": "Ascites PMN >250/µL, albumin supplementation 1.5g/kg day 1, 1g/kg day 3",
            "de": "Aszites PMN >250/µL, Albuminersatz 1,5g/kg am 1. Tag, 1g/kg am 3. Tag"
        }
    },
    {
        "name": {
            "hu": "Másodlagos peritonitis",
            "en": "Secondary peritonitis",
            "de": "Sekundäre Peritonitis"
        },
        "category": "Gastrointestinal",
        "commonPathogens": [
            "E. coli",
            "B. fragilis",
            "Enterococcus",
            "K. pneumoniae"
        ],
        "empiricalTherapy": {
            "firstLine": "Piperacillin-tazobactam 4.5g IV 6h",
            "alternative": "Meropenem 1g IV 8h vagy Ceftriaxone + Metronidazole",
            "duration": "5-7 nap (forrás kontroll után)"
        },
        "targetedTherapy": {
            "E. coli": "Ceftriaxone + Metronidazole",
            "B. fragilis": "Metronidazole vagy Clindamycin",
            "Enterococcus": "Ampicillin",
            "Pseudomonas": "Piperacillin-tazobactam + Ciprofloxacin"
        },
        "notes": {
            "hu": "Forrás kontroll kritikus! Sebészeti beavatkozás szükséges",
            "en": "Source control is critical! Surgical intervention required",
            "de": "Quellenkontrolle ist entscheidend! Chirurgischer Eingriff erforderlich"
        }
    },
    {
        "name": {
            "hu": "Harmadlagos peritonitis",
            "en": "Tertiary peritonitis",
            "de": "Tertiäre Peritonitis"
        },
        "category": "Gastrointestinal",
        "commonPathogens": [
            "Candida spp.",
            "Enterococcus",
            "P. aeruginosa",
            "A. baumannii"
        ],
        "empiricalTherapy": {
            "firstLine": "Meropenem 2g IV 8h + Vancomycin 15-20mg/kg IV 8-12h + Fluconazole 400mg IV 24h",
            "alternative": "Ceftazidime-avibactam + Linezolid + Caspofungin",
            "duration": "7-14 nap"
        },
        "targetedTherapy": {
            "Candida albicans": "Fluconazole 400mg IV 24h",
            "Candida glabrata": "Caspofungin 50mg IV 24h",
            "VRE": "Linezolid vagy Daptomycin",
            "MDR P. aeruginosa": "Ceftazidime-avibactam + Amikacin"
        },
        "notes": {
            "hu": "MDR patogének, antifungális terápia, gyakran fatális kimenetel",
            "en": "MDR pathogens, antifungal therapy, often fatal outcome",
            "de": "MDR-Erreger, antimykotische Therapie, oft tödlicher Verlauf"
        }
    },
    {
        "name": {
            "hu": "Akut cholecystitis",
            "en": "Acute cholecystitis",
            "de": "Akute Cholezystitis"
        },
        "category": "Gastrointestinal",
        "commonPathogens": [
            "E. coli",
            "K. pneumoniae",
            "Enterococcus",
            "Clostridium spp."
        ],
        "empiricalTherapy": {
            "firstLine": "Ceftriaxone 1g IV 24h + Metronidazole 500mg IV 8h",
            "alternative": "Piperacillin-tazobactam 4.5g IV 6h",
            "duration": "7-10 nap"
        },
        "targetedTherapy": {
            "E. coli": "Ceftriaxone + Metronidazole",
            "K. pneumoniae": "Ceftriaxone + Metronidazole",
            "Enterococcus": "Ampicillin-sulbactam",
            "Clostridium": "Metronidazole"
        },
        "notes": {
            "hu": "Laparoszkópos cholecystectomia 72 órán belül, ha lehetséges",
            "en": "Laparoscopic cholecystectomy within 72 hours if possible",
            "de": "Laparoskopische Cholezystektomie innerhalb von 72 Stunden, wenn möglich"
        }
    },
    {
        "name": {
            "hu": "Akut cholangitis",
            "en": "Acute cholangitis",
            "de": "Akute Cholangitis"
        },
        "category": "Gastrointestinal",
        "commonPathogens": [
            "E. coli",
            "K. pneumoniae",
            "Enterococcus",
            "B. fragilis"
        ],
        "empiricalTherapy": {
            "firstLine": "Piperacillin-tazobactam 4.5g IV 6h",
            "alternative": "Meropenem 1g IV 8h vagy Ceftriaxone 1g IV 24h + Metronidazole 500mg IV 8h",
            "duration": "7-10 nap (lefolyás függő)"
        },
        "targetedTherapy": {
            "E. coli": "Ceftriaxone + Metronidazole",
            "K. pneumoniae": "Ceftriaxone + Metronidazole",
            "Enterococcus": "Ampicillin + Gentamicin",
            "B. fragilis": "Metronidazole"
        },
        "notes": {
            "hu": "Biliáris dekompresszió szükséges (ERCP), súlyos szepszis esetén ICU kezelés",
            "en": "Biliary decompression (ERCP) required, ICU treatment in case of severe sepsis",
            "de": "Gallengangsdekompression (ERCP) erforderlich, Intensivbehandlung bei schwerer Sepsis"
        }
    },
    {
        "name": {
            "hu": "Appendicitis",
            "en": "Appendicitis",
            "de": "Appendizitis"
        },
        "category": "Gastrointestinal",
        "commonPathogens": [
            "E. coli",
            "B. fragilis",
            "Streptococcus",
            "Pseudomonas (perforált)"
        ],
        "empiricalTherapy": {
            "firstLine": "Cefazolin 2g IV 8h + Metronidazole 500mg IV 8h",
            "alternative": "Ceftriaxone 1g IV 24h + Metronidazole 500mg IV 8h vagy Piperacillin-tazobactam 4.5g IV 6h",
            "duration": "24h (nem perforált) - 7 nap (perforált)"
        },
        "targetedTherapy": {
            "E. coli": "Ceftriaxone + Metronidazole",
            "B. fragilis": "Metronidazole",
            "Pseudomonas": "Piperacillin-tazobactam"
        },
        "notes": {
            "hu": "Appendectomia a definitív terápia, antibiotikum perioperatív profilaxis",
            "en": "Appendectomy is the definitive therapy, antibiotics for perioperative prophylaxis",
            "de": "Appendektomie ist die definitive Therapie, Antibiotika zur perioperativen Prophylaxe"
        }
    },
    {
        "name": {
            "hu": "Diverticulitis (szövődménymentes)",
            "en": "Diverticulitis (uncomplicated)",
            "de": "Divertikulitis (unkompliziert)"
        },
        "category": "Gastrointestinal",
        "commonPathogens": [
            "E. coli",
            "K. pneumoniae",
            "B. fragilis",
            "Streptococcus"
        ],
        "empiricalTherapy": {
            "firstLine": "Cefuroxim 500mg PO 12h + Metronidazole 500mg PO 8h",
            "alternative": "Amoxicillin-clavulanate 875/125mg PO 12h",
            "duration": "7-10 nap"
        },
        "targetedTherapy": {
            "E. coli": "Cefuroxim + Metronidazole",
            "B. fragilis": "Metronidazole"
        },
        "notes": {
            "hu": "A legtöbb esetben ambulanter kezelhető, folyékony étrend, abszcesszus esetén drainage szükséges",
            "en": "Mostly treatable outpatient, liquid diet, drain if abscess present",
            "de": "Meist ambulant behandelbar, Flüssignahrung, Drainage bei Abszess"
        }
    },
    {
        "name": {
            "hu": "C. difficile infekció",
            "en": "C. difficile infection",
            "de": "C. difficile-Infektion"
        },
        "category": "Gastrointestinal",
        "commonPathogens": [
            "Clostridioides difficile"
        ],
        "empiricalTherapy": {
            "firstLine": "Vancomycin 125mg PO 6h, 10 nap",
            "alternative": "Fidaxomicin 200mg PO 12h, 10 nap",
            "duration": "10 nap"
        },
        "targetedTherapy": {
            "Első epizód (enyhe/közepes)": "Fidaxomicin vagy Vancomycin PO",
            "Első epizód (súlyos)": "Vancomycin PO + Metronidazole IV",
            "Recidíva": "Fidaxomicin vagy tapered Vancomycin"
        },
        "notes": {
            "hu": "Recidíváló esetben FMT mérlegelése",
            "en": "Consider FMT in recurrent cases",
            "de": "FMT bei rezidivierenden Fällen in Betracht ziehen"
        }
    },
    {
        "name": {
            "hu": "Intraabdominális abscessus",
            "en": "Intra-abdominal abscess",
            "de": "Intraabdomineller Abszess"
        },
        "category": "Gastrointestinal",
        "commonPathogens": [
            "E. coli",
            "B. fragilis",
            "Enterococcus",
            "P. aeruginosa",
            "K. pneumoniae"
        ],
        "empiricalTherapy": {
            "firstLine": "Piperacillin-tazobactam 4.5g IV 6h vagy Meropenem 1g IV 8h",
            "alternative": "Ceftriaxone 1g IV 24h+ Metronidazole 500mg IV 8h",
            "duration": "10-14 nap (drenázs után)"
        },
        "targetedTherapy": {
            "E. coli (ESBL)": "Meropenem",
            "B. fragilis": "Metronidazole",
            "Enterococcus": "Ampicillin",
            "P. aeruginosa": "Piperacillin-tazobactam + Ciprofloxacin"
        },
        "notes": {
            "hu": "Sebészeti vagy radiológiai drenázs kulcsfontosságú, antibiotikum önmagában nem hatékony",
            "en": "Surgical or radiological drainage is key, antibiotics alone are not effective",
            "de": "Chirurgische oder radiologische Drainage ist entscheidend, Antibiotika allein sind nicht wirksam"
        }
    },
    {
        "name": {
            "hu": "Spondylodiscitis",
            "en": "Spondylodiscitis",
            "de": "Spondylodiszitis"
        },
        "category": "Orthopedic",
        "commonPathogens": [
            "S. aureus",
            "Streptococcus spp.",
            "E. coli",
            "P. aeruginosa"
        ],
        "empiricalTherapy": {
            "firstLine": "Ceftriaxone 2g IV 24h + Vancomycin 15-20mg/kg IV 8-12h",
            "alternative": "Ciprofloxacin 400mg IV 12h + Rifampin 300mg PO 12h",
            "duration": "6-12 hét"
        },
        "targetedTherapy": {
            "S. aureus (MSSA)": "Cefazolin 2g IV 8h vagy Flucloxacillin 2g IV 4h, 6-12 hét",
            "S. aureus (MRSA)": "Vancomycin, 6-12 hét",
            "E. coli": "Ceftriaxone, 6-12 hét",
            "P. aeruginosa": "Ciprofloxacin, 6-12 hét"
        },
        "notes": {
            "hu": "Hosszú ideig tartó antibiotikum kezelés szükséges, sebészeti debridement mérlegelése",
            "en": "Long-term antibiotic treatment required, consider surgical debridement",
            "de": "Langfristige Antibiotikabehandlung erforderlich, chirurgisches Debridement in Betracht ziehen"
        }
    },
    {
        "name": {
            "hu": "Osteomyelitis",
            "en": "Osteomyelitis",
            "de": "Osteomyelitis"
        },
        "category": "Orthopedic",
        "commonPathogens": [
            "S. aureus",
            "S. epidermidis",
            "P. aeruginosa",
            "Salmonella (sarlósejtes anémia esetén)"
        ],
        "empiricalTherapy": {
            "firstLine": "Vancomycin 15-20mg/kg IV 8-12h + Ceftriaxone 2g IV 24h",
            "alternative": "Linezolid 600mg IV 12h + Ciprofloxacin 400mg IV 12h",
            "duration": "4-6 hét"
        },
        "targetedTherapy": {
            "S. aureus (MSSA)": "Cefazolin 2g IV 8h vagy Flucloxacillin 2g IV 4h, 6-12 hét",
            "S. aureus (MRSA)": "Vancomycin vagy Linezolid, 4-6 hét",
            "P. aeruginosa": "Ciprofloxacin, 4-6 hét",
            "Salmonella": "Ceftriaxone, 4-6 hét"
        },
        "notes": {
            "hu": "Sebészeti debridement kulcsfontosságú, krónikus osteomyelitis gyakori, gyakran sebészeti beavatkozás szükséges",
            "en": "Surgical debridement is key, chronic osteomyelitis common, often requires surgical intervention",
            "de": "Chirurgisches Debridement ist entscheidend, chronische Osteomyelitis häufig, erfordert oft einen chirurgischen Eingriff"
        }
    },
    {
        "name": {
            "hu": "Bakteriális agytályog",
            "en": "Bacterial brain abscess",
            "de": "Bakterieller Hirnabszess"
        },
        "category": "CNS",
        "commonPathogens": [
            "Streptococcus spp.",
            "Staphylococcus spp.",
            "Anaerob baktériumok"
        ],
        "empiricalTherapy": {
            "firstLine": "Ceftriaxone 2g IV 12h + Metronidazole 500mg IV 8h",
            "alternative": "Ceftazidime 2g IV 8h + Metronidazole 500mg IV 8h + Vancomycin 15-20mg/kg IV 8-12h",
            "duration": "6-8 hét"
        },
        "targetedTherapy": {
            "Streptococcus": "Penicillin G 4 MU IV 4h, 6-8 hét",
            "S. aureus": "Flucloxacillin/Vancomycin, 6-8 hét",
            "Anaerob": "Metronidazole 500mg IV 8h, 6-8 hét"
        },
        "notes": {
            "hu": "MR-rel vagy CT-vel megerősített diagnózis, sebészeti drenázs vagy aspiráció",
            "en": "Diagnosis confirmed by MRI or CT, surgical drainage or aspiration",
            "de": "Diagnose bestätigt durch MRT oder CT, chirurgische Drainage oder Aspiration"
        }
    },
    {
        "name": {
            "hu": "Subdurális empyema",
            "en": "Subdural empyema",
            "de": "Subdurales Empyem"
        },
        "category": "CNS",
        "commonPathogens": [
            "Streptococcus spp.",
            "Staphylococcus spp.",
            "Anaerob baktériumok"
        ],
        "empiricalTherapy": {
            "firstLine": "Vancomycin 15-20mg/kg IV 8-12h + Ceftriaxone 2g IV 12h + Metronidazole 500mg IV 8h",
            "alternative": "Linezolid 600mg IV 12h + Meropenem 2g IV 8h",
            "duration": "4-6 hét"
        },
        "targetedTherapy": {
            "Streptococcus": "Penicillin G 4 MU IV 4h, 4-6 hét",
            "S. aureus": "Flucloxacillin/Vancomycin, 4-6 hét",
            "Anaerob": "Metronidazole 500mg IV 8h, 4-6 hét",
            "Polimikrobiális": "Vancomycin + Meropenem + Metronidazole"
        },
        "notes": {
            "hu": "Sürgős sebészeti drenázs szükséges, neurológiai szövődmények gyakoriak",
            "en": "Urgent surgical drainage required, neurological complications common",
            "de": "Dringender chirurgischer Eingriff erforderlich, neurologische Komplikationen häufig"
        }
    }
];
