const projects = [
 {title:'Wind turbine design, manufacture & test',context:'Imperial College London',date:'2026',type:'STRUCTURES / MANUFACTURING',visual:'turbine',label:'1ST / 24 TEAMS',summary:'Competition-winning design. Structural modelling, manufacture and wind-tunnel testing in a six-person team.',tags:'MATLAB · Structural analysis · Manufacturing · Testing',details:["Won Imperial’s wind turbine competition against 23 other teams, as part of a six-person team assessed on technical performance, manufacturing cost and presentation.",'Led structural analysis, developing a MATLAB model of blade stresses and deflection to guide spanwise chord adjustments, improving aerodynamic performance while maintaining the selected structural safety factor.','Achieved the second-highest power output (32 W at 10 m/s) at the second-lowest manufacturing cost (£15), meeting the 30–36 W design target.']},
 {"title": "Beam analysis & validation", "context": "Imperial College London", "date": "2026", "type": "STRUCTURES / FEA", "visual": "beam", "summary": "Abaqus beam models compared with analytical predictions and experimental displacement and strain measurements.", "tags": "Abaqus · FEA · Beam theory · Mesh refinement", "details": []},
 {"title": "Pipe-flow CFD & validation", "context": "Imperial College London", "date": "2026", "type": "FLUID MECHANICS / CFD", "visual": "cfd", "summary": "Laminar pipe-flow simulations compared with theory and experiment at Re = 1,377.", "tags": "STAR-CCM+ · CFD · Pipe flow · Experimental validation", "details": []},
 {title:'Aircraft performance & stability',context:'Imperial College London',date:'2025–2026',type:'AERODYNAMICS / FLIGHT',visual:'aircraft',label:'LIFT / DRAG / TRIM',summary:'Investigating aircraft behaviour through wind-tunnel testing and flight simulation.',tags:'Wind-tunnel testing · Flight simulation · Stability',details:['Analysed aircraft lift, drag, trim and stall behaviour through wind-tunnel testing and flight simulation; estimated stability parameters and demonstrated broad agreement with aerodynamic theory.']},
 {title:'Model wind tunnel',context:'Independent project',date:'2024; revisited 2026',type:'BUILD / TEST / ANALYSE',visual:'tunnel',label:'INDEPENDENT PROJECT',summary:'A self-built wind tunnel, airfoil measurements and a later comparison with XFOIL predictions.',tags:'Python · XFOIL · Experimental testing',details:['Built a model wind tunnel and measured lift curves for several unidentified airfoils; later digitised their profiles to identify them and compared measurements with XFOIL predictions using Python, highlighting calibration and Reynolds-number limitations.']},
 {title:'Lifting-line model',context:'MATLAB coursework',date:'2026',type:'NUMERICAL MODELLING',visual:'wing',label:'HORSESHOE-VORTEX SOLVER',summary:'Predicting wing lift and drag with a horseshoe-vortex lifting-line solver.',tags:'MATLAB · Lifting-line theory · Convergence',details:['Developed a horseshoe-vortex lifting-line solver to predict spanwise lift and wing lift and drag coefficients; assessed convergence using 10–100 panels and compared predictions with published experimental data.']},
 {title:'Membrane oscillations',context:'MATLAB coursework',date:'2026',type:'NUMERICAL METHODS',visual:'membrane',label:'VIBRATION / CONVERGENCE',summary:'Circular-membrane vibration, modelled with custom numerical methods and benchmarked against MATLAB routines.',tags:'MATLAB · Numerical methods · Vibration',details:['Modelled circular-membrane vibration using custom numerical methods, benchmarking accuracy and convergence against MATLAB routines.']},
 {title:'Light aircraft design',context:'RAeS Light Aircraft Design Competition · Independent team project',date:'2026–present',type:'PROPULSION / AIRCRAFT DESIGN',visual:'engine',label:'IN PROGRESS',summary:'Propulsion work within a newly established six-person team designing a light trainer aircraft.',tags:'MATLAB · Propulsion · Engine selection · Team design',details:['Recently established a six-person team to design a light trainer aircraft for the 2027 competition; responsible for propulsion, with initial work including a MATLAB tool to compare candidate engines using performance data.']},
 {title:'Satellite flywheel structures',context:'Imperial College Space Society (ICSS)',date:'2026–present',type:'MECHANICAL DESIGN / STRUCTURES',visual:'flywheel',label:'IN PROGRESS',summary:'Structures team member working on a flywheel system to demonstrate satellite attitude control.',tags:'Mechanical design · Structural analysis · Attitude control',details:['Structures team member developing a flywheel system to demonstrate satellite attitude control, with a focus on mechanical design and structural analysis.']},
 {title:'Materials characterisation',context:'Imperial College London',date:'2025',type:'MATERIALS / TESTING',visual:'materials',label:'ALUMINIUM / POLYMERS',summary:'Exploring material behaviour through tensile, strain-gauge and Vickers hardness testing.',tags:'Tensile testing · Strain gauges · Vickers hardness',details:['Characterised aluminium and polymer behaviour through tensile, strain-gauge and Vickers hardness testing.']}
];
// Concept diagrams only: these are not measured results or images of the projects.
function illustration(kind,index){
 const grid=Array.from({length:15},(_,i)=>`<path d="M${i*40} 0V440M0 ${i*40}H600"/>`).join('');
 const drawings={
 turbine:`<circle cx="300" cy="190" r="120" stroke-dasharray="4 8" opacity=".3"/><path d="M292 210L280 360H320L308 210"/><g transform="translate(300 190)">${[0,120,240].map(a=>`<path transform="rotate(${a})" d="M0 0Q-35-55-12-145Q9-162 11-127L12-18Z" fill="#a0a0a6" fill-opacity=".25"/>`).join('')}</g><circle cx="300" cy="190" r="15" fill="#e1e1e5"/><path d="M215 365H385M100 190H150M450 190H500"/>`,
 simulation:Array.from({length:15},(_,i)=>`<path d="M75 ${130+i*12}C210 ${105+i*14} 350 ${195+i*9} 525 ${145+i*12}" stroke="hsl(240 3% ${38+i*3}%)"/>`).join('')+`<path d="M75 115V325M525 115V325" stroke-dasharray="4 5"/>`,
 aircraft:`<g transform="translate(300 215) rotate(-18)"><path d="M0-150L15-60 170 40 170 60 15 15 12 100 60 135 60 150 0 130-60 150-60 135-12 100-15 15-170 60-170 40-15-60Z" fill="#8c8c94" fill-opacity=".18"/><path d="M0-130V130M-160 46H160" stroke-dasharray="4 6"/></g>`,
 tunnel:`<path d="M90 130L230 170H390L510 135V305L390 270H230L90 310Z" fill="#8c8c94" fill-opacity=".1"/><path d="M90 130V310M230 170V270M390 170V270M510 135V305M90 220H510" stroke-dasharray="4 6"/><path d="M265 224Q300 190 350 222Q300 215 265 224Z" fill="#e1e1e5"/><path d="M110 195H200M110 245H200M410 195H490M410 245H490"/>`,
 wing:`<g transform="translate(80 105) skewY(12)"><path d="M0 0H440L380 170H60Z" fill="#8c8c94" fill-opacity=".12"/>${Array.from({length:15},(_,i)=>`<path d="M${i*29} 0L${60+i*21} 170V245"/>`).join('')}<path d="M30 85H410" stroke="#e1e1e5" stroke-width="3"/></g>`,
 membrane:`<g transform="translate(300 220)">${Array.from({length:10},(_,i)=>`<ellipse rx="${20+i*14}" ry="${12+i*9}" transform="rotate(${i*5})"/>`).join('')}<path d="M-170 0H170M0-140V140" stroke-dasharray="4 5"/></g>`,
 engine:`<g transform="translate(300 220)"><circle r="120"/><circle r="95"/><circle r="27" fill="#8c8c94" fill-opacity=".4"/>${Array.from({length:12},(_,i)=>`<path transform="rotate(${i*30})" d="M0-30Q50-65 22-90L0-95Q10-65-10-30Z" fill="#8c8c94" fill-opacity=".2"/>`).join('')}<path d="M-170 0H170M0-155V155" stroke-dasharray="3 7"/></g>`,
 flywheel:`<g transform="translate(300 220) rotate(-25)"><path d="M-125-100H125V100H-125Z"/><ellipse rx="100" ry="76"/><ellipse rx="75" ry="57"/><ellipse rx="24" ry="18" fill="#e1e1e5" fill-opacity=".4"/><path d="M-115-90L115 90M115-90L-115 90" stroke-dasharray="5 5"/>${[-1,1].flatMap(x=>[-1,1].map(y=>`<circle cx="${x*110}" cy="${y*85}" r="6"/>`)).join('')}</g>`,
 materials:`<path d="M255 80H345V150L320 185V275L345 310V365H255V310L280 275V185L255 150Z" fill="#8c8c94" fill-opacity=".25"/><path d="M300 55V120M300 325V390M285 70L300 55 315 70M285 375L300 390 315 375"/><path d="M110 300V160M110 300H210M120 280Q160 190 195 200" opacity=".5"/>`
 };
 return `<svg viewBox="0 0 600 440" aria-hidden="true" focusable="false"><defs><radialGradient id="g${index}"><stop stop-color="#303033"/><stop offset="1" stop-color="#1b1b1e"/></radialGradient></defs><path fill="url(#g${index})" d="M0 0H600V440H0Z"/><g stroke="#808087" stroke-width=".5" opacity=".12">${grid}</g><g fill="none" stroke="#c4c4cc" stroke-width="1.5" stroke-linejoin="round">${drawings[kind]}</g></svg>`;
}
const projectImages = {
 cfd: {src:'assets/pipe-flow-cfd.png',alt:'STAR-CCM+ pipe-flow velocity-magnitude contours with higher speeds at the centre and lower speeds near the wall'},
 aircraft: {src:'assets/aircraft-performance-cleaned.png',alt:'Business-jet model with wool tufts on its wing mounted in the wind tunnel'},
 materials: {src:'assets/materials-tensile-test.jpg',alt:'Yellow tensile-test specimen held between the grips of a materials testing machine'},
 wing: {src:'assets/lifting-line-panel-comparison.png',alt:'Spanwise lift distributions comparing lifting-line models with 10, 20, 50 and 100 panels'},
 membrane: {src:'assets/membrane-modes.png',alt:'Nine circular membrane vibration modes shown as orange three-dimensional mesh surfaces'},
 flywheel: {src:'assets/icss-logo.png',alt:'Imperial College Space Society logo',logo:true},
 beam: {src:'assets/beam-simulation.png',alt:'Finite element beam simulation showing a meshed, deflected beam with blue and teal contours'},
 turbine: {src:'assets/turbine-blades.jpg',alt:'Manufactured wooden wind turbine blades and metal hub in the workshop'},
 tunnel: {src:'assets/wind-tunnel-cleaned.png',alt:'Home-built transparent wind tunnel with an airfoil, flow straightener and fan'},
 engine: {src:'assets/raes-logo.webp',alt:'Royal Aeronautical Society logo',logo:true}
};
const projectContent = {
  "turbine": {
    "role": "Six-person team project. I led the structural analysis, working with the aerodynamic and CAD team members.",
    "details": [
      "Designed, manufactured and tested a two-bladed plywood turbine as part of a six-person team, balancing the 30–36 W power target against manufacturing cost and structural requirements.",
      "Developed a MATLAB structural model using distributed aerodynamic loads, spanwise section properties and asymmetric bending to predict surface stresses and blade deflection. Included centrifugal stress in the combined stress assessment.",
      "Used the structural predictions to guide spanwise chord adjustments and checked the model against simplified cantilever hand calculations.",
      "The team manufactured the blades from laser-cut birch-plywood laminations, bonded with PVA, then shaped, sanded and varnished them.",
      "Won the competition against 23 other teams. The tested turbine produced 32 W at 10 m/s at a manufacturing cost of £15: the second-highest power output and second-lowest manufacturing cost."
    ],
    "sections": [
      {
        "heading": "Structural results and model limits",
        "bullets": [
          "The presentation reports maximum combined tensile stresses of approximately 2.00 MPa for the maximum-RPM case and 1.26 MPa for the maximum-power case.",
          "Predicted maximum deflections were 0.112 mm and 0.121 mm for those two cases, respectively. These are model predictions, rather than measured deflections.",
          "The beam model used a constant elastic modulus and omitted torsion, shear deformation, resonance and the effects of glue and surface finish. Plywood orthotropy is a further limitation."
        ]
      }
    ],
    "gallery": [
      {
        "src": "assets/turbine-blades.jpg",
        "caption": "Manufactured blades and hub."
      },
      {
        "src": "assets/turbine-deflections.png",
        "caption": "Calculated spanwise deflection for the two loading cases. Extracted from the team presentation."
      }
    ],
    "resources": [
      {
        "href": "downloads/turbine-team-presentation.pdf",
        "label": "Team presentation",
        "type": "PDF",
        "download": true
      }
    ],
    "image": {
      "src": "assets/turbine-surface-stress.png",
      "alt": "MATLAB blade-surface stress maps for maximum-RPM and maximum-power load cases"
    },
    "imageCaption": "Blade-surface stress predictions from slide 21 of the team presentation."
  },
  "aircraft": {
    "role": "Group laboratory project combining wind-tunnel testing and flight simulation. My contributions covered lift-curve analysis and the wind-tunnel stability analysis, with shared work on drag, trim and stall interpretation.",
    "details": [
      "Investigated the aerodynamic performance of a 1:24-scale business-jet model, comparing wind-tunnel measurements with flight-simulator results.",
      "The group tested three configurations: tail removed, tail incidence +1° and tail incidence −2°. Analysed lift, drag and pitching-moment behaviour across the configurations.",
      "Compared lift-curve slopes, zero-lift angles and stall behaviour, examining differences between scale-model tunnel conditions and the simulator.",
      "Contributed to drag-polar analysis and estimation of zero-lift drag and Oswald efficiency. The group obtained wind-tunnel efficiency estimates of approximately 0.72–0.81.",
      "Analysed pitching-moment relationships to estimate neutral-point position, tail effectiveness and downwash, with explicit discussion of the substantial uncertainty in the derived parameters.",
      "Helped interpret wool-tuft observations and simulator stall behaviour. The wind-tunnel observations showed separation developing on the main wing while flow remained attached over the tailplane."
    ]
  },
  "tunnel": {
    "role": "Independent build and experimental investigation, revisited with numerical analysis in 2026.",
    "details": [
      "Built a small wind tunnel to investigate lift generation using a fan-driven transparent test section and a flow straightener.",
      "Measured lift curves for several initially unidentified airfoil sections.",
      "Revisited the project by digitising the profiles to identify the airfoils and compare their geometry.",
      "Used Python to compare the measured lift curves with XFOIL predictions.",
      "Examined calibration and Reynolds-number limitations when interpreting differences between the measured and predicted behaviour."
    ]
  },
  "wing": {
    "role": "MATLAB coursework. Implemented the wing-analysis workflow using the supplied horseshoe-vortex downwash helper.",
    "details": [
      "Developed a MATLAB solver for an unswept tapered wing, including spanwise chord variation and geometric twist.",
      "Iteratively updated circulation and induced downwash, using shape-preserving interpolation of sectional airfoil polar data to calculate the local lift and profile-drag coefficients.",
      "Calculated spanwise lift and integrated sectional contributions to estimate whole-wing lift and drag coefficients.",
      "Implemented three analysis modes: a single operating point, an angle-of-attack sweep and a comparison of panel counts.",
      "Compared 10, 20, 50 and 100 panels, with convergence warnings and automated export of figures and results. The supplied polar does not document its Reynolds number, so these outputs are presented as model results rather than independent experimental validation."
    ],
    "resources": [
      {
        "href": "downloads/lifting-line-code.zip",
        "label": "Code and airfoil data",
        "type": "ZIP",
        "download": true
      },
      {
        "href": "downloads/lifting-line/wingAnalysisMain.m",
        "label": "Main MATLAB source",
        "type": "M",
        "download": true
      },
      {
        "href": "downloads/lifting-line/README.md",
        "label": "Usage and assumptions",
        "type": "README",
        "download": true
      }
    ]
  },
  "membrane": {
    "role": "MATLAB numerical-methods coursework using circular-membrane vibration as the application.",
    "summary": "Bessel-function interpolation, numerical integration and root finding, applied to circular-membrane frequencies.",
    "details": [
      "Implemented polynomial interpolation, Lagrange interpolation with a Chebyshev-based node subset, and natural cubic splines for tabulated Bessel-function data.",
      "Implemented trapezium, Simpson’s 1/3 and Gauss–Legendre quadrature for Bessel’s integral, comparing absolute errors against a MATLAB reference across several node counts.",
      "Investigated boundary oscillations, matrix conditioning and the loss of accuracy when generating high-order Legendre quadrature nodes from polynomial coefficients.",
      "Implemented automatic root bracketing, bisection, Newton and secant methods, comparing their accuracy and runtime with MATLAB fzero.",
      "Used the Bessel roots to estimate the first four membrane frequencies: approximately 83.9, 134, 179 and 192 Hz for the coursework sample parameters. Compared these with a demonstration video and discussed departures from ideal membrane assumptions."
    ],
    "imageCaption": "Reference mode-shape illustration supplied with the coursework; not an output of the numerical implementation.",
    "tags": "MATLAB · Bessel functions · Interpolation · Quadrature · Root finding",
    "resources": [
      {
        "href": "downloads/membrane-code.zip",
        "label": "Live script and source",
        "type": "ZIP",
        "download": true
      },
      {
        "href": "downloads/membrane/membraneNumericalMethods.m",
        "label": "MATLAB source",
        "type": "M",
        "download": true
      }
    ]
  },
  "engine": {
    "role": "Early-stage independent team project for the 2027 RAeS Light Aircraft Design Competition.",
    "details": [
      "Established a six-person team to develop a light trainer aircraft for the 2027 competition.",
      "Responsible for the propulsion workstream within the team.",
      "Initial work includes a MATLAB tool to compare candidate engines using performance data. Design and engine selection are in progress."
    ]
  },
  "flywheel": {
    "role": "Early-stage structures-team work within Imperial College Space Society’s flywheel control demonstrator project.",
    "details": [
      "Structures team member on a demonstrator intended to show how flywheels can control satellite attitude.",
      "The project brief targets two-axis control within a 1U envelope (10 × 10 × 10 cm), integrating flywheels, motors and electronics. These are project requirements rather than demonstrated performance.",
      "Initial work has focused on Autodesk Fusion CAD, including exploration of generative-design tools and FEA. Mechanical design and structural analysis remain in progress."
    ]
  },
  "materials": {
    "role": "Laboratory investigation of metallic-alloy and polymer behaviour using strain gauges, tensile tests and Vickers hardness measurements.",
    "details": [
      "Compared metallic-alloy and polymer stress–strain behaviour, including elastic response, yielding, unloading/reloading and failure.",
      "Determined elastic modulus, critical stress, ultimate tensile strength and ductility from the test results.",
      "Analysed strain-gauge loading and unloading data and considered how measurement methods and grip deformation affect the interpretation of elastic response.",
      "Assessed hardness using three Vickers indentations, with reported HV values ranging from 68.9 to 72.3, and compared the results with a Tabor-construction estimate."
    ],
    "table": {
      "caption": "Tensile-test results",
      "headers": [
        "Property",
        "Metallic alloy",
        "Polymer"
      ],
      "rows": [
        [
          "Elastic modulus (GPa)",
          "77.9",
          "0.511"
        ],
        [
          "Critical stress (MPa)",
          "159.0",
          "57.6"
        ],
        [
          "Ultimate tensile strength (MPa)",
          "217.0",
          "70.1"
        ],
        [
          "Ductility (nominal strain)",
          "0.120",
          "0.337"
        ]
      ]
    },
    "gallery": [
      {
        "src": "assets/materials-strain-gauge.png",
        "caption": "Stress–strain response from the separate strain-gauge loading/unloading investigation."
      }
    ]
  },
  "beam": {
    "role": "Laboratory investigation comparing Euler–Bernoulli theory, Abaqus finite element models and experimental beam measurements.",
    "details": [
      "Modelled a statically indeterminate stainless-steel beam using 1D B23 beam elements and 3D C3D8R continuum elements, comparing their responses with Euler–Bernoulli theory and laboratory measurements under loads up to 40 N.",
      "Conducted mesh-refinement studies, examining nodal and interpolated displacements and the importance of through-thickness mesh resolution in the 3D model.",
      "The 1D FEA and theoretical load–deflection gradients differed by 0.17%. The predicted gradient differed from the experimental result by approximately 3.9%.",
      "Investigated the larger strain discrepancy near a support (29%, compared with 2.1% at the more distant gauge), discussing local contact effects and idealised boundary conditions as possible causes.",
      "Recognised that the 3D solution had not fully converged within the available software limits. Used the 1D model for the subsequent comparison."
    ],
    "gallery": [
      {
        "src": "assets/beam-mesh-convergence.png",
        "caption": "Beam mesh-refinement study, showing the different behaviour of 1D and 3D formulations."
      },
      {
        "src": "assets/beam-validation.png",
        "caption": "Beam load–displacement comparison with experimental uncertainty."
      }
    ],
    "resources": [
      {
        "href": "downloads/beam-analysis-report.pdf",
        "label": "Beam analysis report",
        "type": "PDF"
      }
    ]
  },
  "cfd": {
    "role": "Laboratory investigation comparing analytical pipe-flow predictions, STAR-CCM+ CFD and experimental measurements.",
    "details": [
      "Used experimental measurements to define a laminar pipe-flow case at Re = 1,377 and a mean velocity of 2.21 m/s.",
      "Built a steady, incompressible, axisymmetric simulation and compared two mesh resolutions using velocity profiles, wall gradients, pressure variation and residual histories.",
      "Predicted the pressure-coefficient gradient within 1.1% of theory and the skin-friction coefficient within approximately 3%. Both predictions lay within the reported experimental uncertainty.",
      "Investigated entrance effects, pressure-reference offsets and measurement uncertainty when explaining differences between the analytical, numerical and experimental results."
    ],
    "gallery": [
      {
        "src": "assets/pipe-velocity-validation.png",
        "caption": "CFD radial velocity profiles compared with the analytical laminar-flow solution."
      },
      {
        "src": "assets/pipe-pressure-validation.png",
        "caption": "Pressure-coefficient comparison between experiment, theory and two CFD meshes."
      }
    ],
    "resources": [
      {
        "href": "downloads/pipe-flow-report.pdf",
        "label": "Pipe-flow report",
        "type": "PDF"
      }
    ],
    "imageCaption": "STAR-CCM+ velocity-magnitude contours for the pipe-flow model."
  }
};
projects.forEach(project=>Object.assign(project,projectContent[project.visual]||{}));
Object.entries(projectContent).forEach(([key,value])=>{if(value.image)projectImages[key]=value.image;});
const projectOrder = ['turbine','tunnel','beam','aircraft','wing','cfd','engine','membrane','flywheel','materials'];
projects.sort((a,b)=>projectOrder.indexOf(a.visual)-projectOrder.indexOf(b.visual));
const gallery=document.getElementById('project-grid');
projects.forEach((project,index)=>{
 const card=document.createElement('article');card.className='project-card card-'+project.visual;
 const image=projectImages[project.visual];
 const media=image ? `<img class="project-photo ${image.logo?'project-logo':''}" src="${image.src}" alt="${image.alt}" loading="lazy">` : illustration(project.visual,index);
 card.innerHTML=`<button class="project-button" aria-haspopup="dialog" aria-label="Explore ${project.title}"><div class="project-visual">${media}<div class="visual-top"><span>${project.type}</span><span>${project.date}</span></div>${image ? '' : '<span class="visual-caption">ILLUSTRATION</span>'}<div class="project-overlay"><p>${project.summary}</p><span>View details</span></div></div><div class="project-title"><h3>${project.title}</h3><span aria-hidden="true">↗</span></div><p class="project-meta">${project.context}</p></button>`;
 card.querySelector('button').addEventListener('click',()=>openProject(project));gallery.append(card);
});
const dialog=document.getElementById('project-dialog');
function addBullets(parent, items){
 const list=document.createElement('ul');
 items.forEach(text=>{const li=document.createElement('li');li.textContent=text;list.append(li);});
 parent.append(list);
}
function addFigure(parent, image, caption, className='detail-figure'){
 const figure=document.createElement('figure');figure.className=className;
 const img=document.createElement('img');img.src=image.src;img.alt=image.alt||caption||'';img.loading='lazy';
 figure.append(img);
 if(caption){const text=document.createElement('figcaption');text.textContent=caption;figure.append(text);}
 parent.append(figure);
}
function openProject(project){
 const content=document.getElementById('dialog-content');content.replaceChildren();
 const title=document.createElement('h2');title.id='dialog-title';title.textContent=project.title;
 const meta=document.createElement('p');meta.className='project-meta';meta.textContent=`${project.context} · ${project.date}`;
 content.append(title,meta);
 if(project.role){const role=document.createElement('p');role.className='project-role';role.textContent=project.role;content.append(role);}
 if(project.resources?.length){
  const links=document.createElement('nav');links.className='project-resources';links.setAttribute('aria-label','Project resources');
  project.resources.forEach(resource=>{
   const link=document.createElement('a');link.href=resource.href;link.textContent=resource.label+' · '+resource.type;
   if(resource.download)link.setAttribute('download','');else{link.target='_blank';link.rel='noopener noreferrer';}
   links.append(link);
  });content.append(links);
 }
 const image=projectImages[project.visual];
 if(image)addFigure(content,image,project.imageCaption,'detail-figure primary-figure'+(image.logo?' logo-figure':''));
 if(project.details.length)addBullets(content,project.details);
 (project.sections||[]).forEach(section=>{
  const block=document.createElement('section');block.className='project-section';
  const heading=document.createElement('h3');heading.textContent=section.heading;block.append(heading);addBullets(block,section.bullets);content.append(block);
 });
 if(project.table){
  const wrap=document.createElement('div');wrap.className='results-table-wrap';
  const table=document.createElement('table');const caption=document.createElement('caption');caption.textContent=project.table.caption;table.append(caption);
  const head=document.createElement('thead');const row=document.createElement('tr');
  project.table.headers.forEach(text=>{const th=document.createElement('th');th.scope='col';th.textContent=text;row.append(th);});head.append(row);table.append(head);
  const body=document.createElement('tbody');project.table.rows.forEach(values=>{const tr=document.createElement('tr');values.forEach((text,i)=>{const cell=document.createElement(i===0?'th':'td');if(i===0)cell.scope='row';cell.textContent=text;tr.append(cell);});body.append(tr);});table.append(body);wrap.append(table);content.append(wrap);
 }
 if(project.gallery?.length){const gallery=document.createElement('div');gallery.className='detail-gallery';project.gallery.forEach(image=>addFigure(gallery,image,image.caption));content.append(gallery);}
 const tags=document.createElement('p');tags.className='tags';tags.textContent=project.tags;content.append(tags);
 dialog.showModal();dialog.scrollTop=0;document.body.style.overflow='hidden';
}
dialog.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('close',()=>{document.body.style.overflow='';});
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
