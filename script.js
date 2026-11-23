/**
 * ALL ABOUT LILY CHOU-CHOU (2001) — MONOGRAFÍA CRÍTICA DE CINEMATOGRAFÍA
 * Arquitectura de Script: Frecuencias Cromáticas Interactivas, Tinte Ambiental Dinámico
 * y Sistema de Soporte Multiformato de Fotogramas de Archivo (assets/frames/).
 * 
 * Estética: Calma contemplativa, interacciones sutiles y puramente decorativas.
 */

document.addEventListener('DOMContentLoaded', () => {
  initImageFallbacks();
  initColorStudy();
  initNavObserver();
});

// Ejecución inmediata para imágenes que ya estén en caché del navegador
initImageFallbacks();

/* ==========================================================================
   1. ESTUDIO CROMÁTICO: LAS 5 FRECUENCIAS DEL ÉTER (EN ESPAÑOL LITERARIO)
   ========================================================================== */

const SWATCH_DATA = {
  'sky': {
    hex: '#F6F7F5',
    rgb: '246, 247, 245',
    tintOpacity: 0.28,
    plateSaturate: '85%',
    plateContrast: '115%',
    plateBrightness: '108%',
    name: 'Cielo Sobreexpuesto',
    role: 'Saturación del Sensor y Espacio Nulo',
    frequency: '92.4 IRE (Techo de Saturación del Sensor)',
    scene: 'Prólogo / Yuichi en la cuenca de Ashikaga (00:01:24)',
    lensContext: 'Fujinon HA10x5.2BERM @ T/3.5, Sobreexposición +1.8 EV',
    thesis: 'El Nulo Calcinado: En el video digital de 2001, la sobreexposición no ofrecía la suave curva del celuloide Kodak; se quebraba abruptamente en un blanco plano de papel fotográfico. Noboru Shinoda convirtió esta limitación técnica en una poderosa metáfora, transformando el cielo estival de Tochigi en un techo implacable que anula toda fuga y evoca el entumecimiento clínico del trauma adolescente.',
    emotionalVector: 'Distanciamiento Emocional / Anulación Absoluta'
  },
  'green': {
    hex: '#6E8F5B',
    rgb: '110, 143, 91',
    tintOpacity: 0.24,
    plateSaturate: '125%',
    plateContrast: '102%',
    plateBrightness: '98%',
    name: 'Verde Arrozal',
    role: 'Clorofila y Soledad Agorafóbica',
    frequency: '520 nm Reflexión Espectral / Dominancia Media',
    scene: 'El Walkman Solitario / Campos ondeantes (00:08:12)',
    lensContext: 'Sony HDW-F900 2/3" 3-CCD, Sin Filtro Polarizador',
    thesis: 'La Pastoral Tóxica: Impregnado por el sol cenital y la clorofila virgen, el verde esmeralda de los arrozales de Tochigi no transmite serenidad ni consuelo bucólico. Al contrario, forma un océano horizontal infinito que devora la figura adolescente. Shinoda encuadra a la altura de las rodillas, dejando que los tallos inunden el plano con una vibrante indiferencia.',
    emotionalVector: 'Soledad Agorafóbica / Falsa Inocencia'
  },
  'cyan': {
    hex: '#4BA3B5',
    rgb: '75, 163, 181',
    tintOpacity: 0.22,
    plateSaturate: '118%',
    plateContrast: '96%',
    plateBrightness: '102%',
    name: 'Cian Piscina',
    role: 'Refracción Subacuática y Clemencia',
    frequency: '488 nm Dispersión Cáustica Refractiva',
    scene: 'El Santuario Subacuático de Shiori Tsuda (00:43:50)',
    lensContext: 'Carcasa Marina Amphibico, Zeiss DigiPrime 7mm, Obturación 90°',
    thesis: 'Euforia Sumergida: El cian es la única frecuencia cromática del filme ligada a la gravidez y al refugio psicológico. Bajo la superficie de la piscina municipal, la extorsión y la violencia acústica del exterior se extinguen. El agua actúa como prisma óptico y escudo sonoro: un oasis fugaz de clemencia antes del inevitable retorno a la superficie.',
    emotionalVector: 'Purificación Acuosa / Tregua Efímera'
  },
  'blue': {
    hex: '#8FA8B2',
    rgb: '143, 168, 178',
    tintOpacity: 0.25,
    plateSaturate: '92%',
    plateContrast: '95%',
    plateBrightness: '97%',
    name: 'Azul Neblina',
    role: 'Distancia Atmosférica y Estática Industrial',
    frequency: 'Dispersión de Rayleigh en Altura / 460 nm',
    scene: 'Red de Catenarias Suburbanas y Vía Férrea (01:12:05)',
    lensContext: 'Canon HJ21x7.5B Teleobjetivo @ 157mm Equiv. de Compresión',
    thesis: 'La Red de Catenarias: El azul grisáceo y descolorido de la cuenca suburbana de Kanto encarna el zumbido eléctrico de las líneas de alta tensión y los trenes de cercanías. Al comprimir el paisaje con un teleobjetivo extremo, Shinoda convierte el cielo en una jaula geométrica surcada por cables, aprisionando a la juventud en el ritmo monocorde del tedio suburbano.',
    emotionalVector: 'Melancolía Suburbana / Liminalidad Periférica'
  },
  'slate': {
    hex: '#232726',
    rgb: '35, 39, 38',
    tintOpacity: 0.32,
    plateSaturate: '80%',
    plateContrast: '120%',
    plateBrightness: '92%',
    name: 'Pizarra Sombra',
    role: 'Ruido de Fondo CCD y Desamparo Interior',
    frequency: '2.5 IRE Corte de Negros / Suelo Digital sin Aplastar',
    scene: 'Habitación de Yuichi / Terminal de Lilyphilia (01:34:40)',
    lensContext: 'Zeiss 28mm Prime, T/1.6 Abierto, Ganancia 0 dB',
    thesis: 'El Suelo Digital: Lejos de los negros profundos del 35 mm, Shinoda preserva las sombras sin aplastar, revelando el sutil grano cromático azul-verdoso intrínseco a los sensores CCD de 2/3 de pulgada. En dormitorios en penumbra y callejones nocturnos, esta pizarra oscura se convierte en la textura del aislamiento: la cámara privada donde la voz de Lily Chou-Chou se consume como soporte vital.',
    emotionalVector: 'Encierro Introspectivo / La Herida del Éter'
  }
};

function initColorStudy() {
  const swatchButtons = document.querySelectorAll('.swatch-chip-btn');
  const activeColorPill = document.getElementById('active-swatch-pill');
  const activeHexEl = document.getElementById('active-swatch-hex');
  const activeNameEl = document.getElementById('active-swatch-name');
  const activeRoleEl = document.getElementById('active-swatch-role');
  const activeFreqEl = document.getElementById('active-swatch-freq');
  const activeSceneEl = document.getElementById('active-swatch-scene');
  const activeLensEl = document.getElementById('active-swatch-lens');
  const activeTitleEl = document.getElementById('active-essay-title');
  const activeSubtitleEl = document.getElementById('active-essay-subtitle');
  const activeBodyEl = document.getElementById('active-essay-body');
  const resetBtn = document.getElementById('swatch-reset-btn');
  const statusPip = document.getElementById('header-status-pip');
  const statusText = document.getElementById('header-status-text');

  let currentKey = 'sky';
  let isPinned = false;

  function applySwatch(key, updatePermanent = false) {
    const data = SWATCH_DATA[key];
    if (!data) return;

    // Actualizar Variables CSS Globales para el tinte ambiental de las láminas
    document.documentElement.style.setProperty('--ambient-tint-rgb', data.rgb);
    document.documentElement.style.setProperty('--ambient-tint-opacity', data.tintOpacity);
    document.documentElement.style.setProperty('--ambient-plate-saturate', data.plateSaturate);
    document.documentElement.style.setProperty('--ambient-plate-contrast', data.plateContrast);
    document.documentElement.style.setProperty('--ambient-plate-brightness', data.plateBrightness);

    // Actualizar Indicador en Cabecera
    if (statusPip) statusPip.style.backgroundColor = data.hex;
    if (statusText) statusText.textContent = `TINTE: ${data.name.toUpperCase()}`;

    // Actualizar Estado Activo de los Botones de Muestra
    swatchButtons.forEach(btn => {
      const match = btn.getAttribute('data-swatch-key') === key;
      btn.classList.toggle('active', match);
      btn.setAttribute('aria-pressed', match ? 'true' : 'false');
    });

    // Actualizar Ficha de Crítica Monográfica
    if (activeColorPill) activeColorPill.style.backgroundColor = data.hex;
    if (activeHexEl) activeHexEl.textContent = data.hex;
    if (activeNameEl) activeNameEl.textContent = data.name;
    if (activeRoleEl) activeRoleEl.textContent = data.role;
    if (activeFreqEl) activeFreqEl.textContent = data.frequency;
    if (activeSceneEl) activeSceneEl.textContent = data.scene;
    if (activeLensEl) activeLensEl.textContent = data.lensContext;
    if (activeTitleEl) activeTitleEl.textContent = data.name;
    if (activeSubtitleEl) activeSubtitleEl.textContent = `${data.role} // ${data.emotionalVector}`;
    if (activeBodyEl) activeBodyEl.textContent = data.thesis;

    if (updatePermanent) {
      currentKey = key;
      isPinned = true;
    }
  }

  // Enlazar Botones de Muestras
  swatchButtons.forEach(btn => {
    const key = btn.getAttribute('data-swatch-key');

    btn.addEventListener('click', () => {
      applySwatch(key, true);
    });

    btn.addEventListener('mouseenter', () => {
      applySwatch(key, false);
    });

    btn.addEventListener('mouseleave', () => {
      if (isPinned && currentKey) {
        applySwatch(currentKey, false);
      }
    });

    // Accesibilidad con teclado: flechas
    btn.addEventListener('keydown', (e) => {
      const keys = Object.keys(SWATCH_DATA);
      const idx = keys.indexOf(key);
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        const nextKey = keys[(idx + 1) % keys.length];
        const nextBtn = document.querySelector(`[data-swatch-key="${nextKey}"]`);
        if (nextBtn) {
          nextBtn.focus();
          applySwatch(nextKey, true);
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        const prevKey = keys[(idx - 1 + keys.length) % keys.length];
        const prevBtn = document.querySelector(`[data-swatch-key="${prevKey}"]`);
        if (prevBtn) {
          prevBtn.focus();
          applySwatch(prevKey, true);
        }
      }
    });
  });

  // Botón para restablecer a luz natural diurna
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      document.documentElement.style.setProperty('--ambient-tint-rgb', '246, 247, 245');
      document.documentElement.style.setProperty('--ambient-tint-opacity', '0');
      document.documentElement.style.setProperty('--ambient-plate-saturate', '100%');
      document.documentElement.style.setProperty('--ambient-plate-contrast', '100%');
      document.documentElement.style.setProperty('--ambient-plate-brightness', '100%');

      if (statusPip) statusPip.style.backgroundColor = 'var(--color-green)';
      if (statusText) statusText.textContent = 'LUZ SOLAR NATURAL (SIN FILTRO)';

      swatchButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      });

      if (activeTitleEl) activeTitleEl.textContent = 'Espectro de Luz Diurna Natural';
      if (activeSubtitleEl) activeSubtitleEl.textContent = 'Luz Solar Cenital Directa de Tochigi (Ganancia 0 dB)';
      if (activeBodyEl) activeBodyEl.textContent = 'Seleccione o pase el cursor sobre cualquiera de las cinco muestras de precisión para evaluar cómo Shunji Iwai y Noboru Shinoda calibraron registros cromáticos específicos para evocar alienación, tregua espiritual y entumecimiento sensorial en el cine digital 24p.';
      
      isPinned = false;
      currentKey = null;
    });
  }

  // Inicializar con Cielo Sobreexpuesto activo
  applySwatch('sky', true);
}

/* ==========================================================================
   2. SISTEMA DE FOTOGRAMAS LOCALES Y RESOLUCIÓN INTELIGENTE (.jpg, .png, .webp)
   ========================================================================== */

/**
 * Función global para gestionar el fallback inmediato y la resolución multiformato
 * de archivos fotográficos (.jpg, .png, .webp, .jpeg, .jpg.jpg).
 */
window.handlePlateFallback = function(img) {
  if (!img) return;

  const currentSrc = img.getAttribute('src') || '';
  if (!img.dataset.retryCount) {
    img.dataset.retryCount = '0';
  }
  const count = parseInt(img.dataset.retryCount, 10);

  // Lista de formatos alternativos universales admitidos
  const extensions = ['.png', '.webp', '.jpg.jpg', '.jpeg', '.jpg'];
  
  if (count < extensions.length) {
    img.dataset.retryCount = (count + 1).toString();
    const basePath = currentSrc.replace(/(\.jpg|\.png|\.webp|\.jpeg|\.jpg\.jpg|\.\.jpg)$/i, '');
    img.src = basePath + extensions[count];
    return;
  }

  // Casos de alias locales conocidos en la carpeta del proyecto
  if (count === extensions.length) {
    img.dataset.retryCount = (count + 1).toString();
    if (currentSrc.includes('tesis-curatorial')) {
      img.src = 'assets/frames/figura-001.jpg';
      return;
    } else if (currentSrc.includes('trama-02-okinawa')) {
      img.src = 'assets/frames/trama-02-okinawa..jpg';
      return;
    }
  }

  // Si todas las extensiones han fallado, solo entonces activar cuadro sustituto
  img.style.display = 'none';
  const container = img.closest('.plate-raster') || 
                    img.closest('.cinematic-raster-239') || 
                    img.closest('.trama-raster');
  if (container) {
    container.classList.add('fallback-active');
  }
};

function initImageFallbacks() {
  const images = document.querySelectorAll('.plate-media-img');

  images.forEach(img => {
    const container = img.closest('.plate-raster') || 
                      img.closest('.cinematic-raster-239') || 
                      img.closest('.trama-raster');

    const markSuccess = () => {
      if (img.naturalWidth > 0) {
        img.style.display = 'block';
        img.classList.add('img-loaded');
        if (container) {
          container.classList.remove('fallback-active');
        }
      }
    };

    // Comprobación si la imagen ya cargó satisfactoriamente (en caché o sincronía)
    if (img.complete && img.naturalWidth > 0) {
      markSuccess();
    } else {
      img.addEventListener('load', markSuccess);
      img.addEventListener('error', () => {
        window.handlePlateFallback(img);
      });
    }
  });
}

/* ==========================================================================
   3. OBSERVADOR DE SECCIÓN ACTIVA EN LA NAVEGACIÓN
   ========================================================================== */

function initNavObserver() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.mono-nav-link');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  });

  sections.forEach(sec => observer.observe(sec));
}
