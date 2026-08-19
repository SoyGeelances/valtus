(function(){
  var nav = document.getElementById('nav');
  var btn = document.getElementById('btnMenu');

  if (btn && nav) {
    btn.addEventListener('click', function(){
      var abierto = nav.classList.toggle('abierto');
      btn.setAttribute('aria-expanded', abierto ? 'true' : 'false');
      btn.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
    });

    document.querySelectorAll('#menu a').forEach(function(a){
      a.addEventListener('click', function(){
        nav.classList.remove('abierto');
        btn.setAttribute('aria-expanded','false');
      });
    });
  }
})();

var articulos = [
  {
    titulo: 'Manejo integrado de plagas: por qué el monitoreo importa más que el químico',
    fecha: '2026-07-28',
    categoria: 'Manejo de plagas',
    extracto: 'El MIP prioriza la prevención y el diagnóstico. Te contamos cómo un plan de monitoreo reduce hasta un 60% el uso de productos.',
    imagen: '/assets/images/blog/control-de-plagas-palomas.jpg',
    alt: 'Técnico aplicando tratamiento de control de plagas en un depósito',
    contenido: [
      'El manejo integrado de plagas no es solo “aplicar un producto y listo”. En realidad, la clave está en entender el comportamiento del problema: qué insectos o roedores están presentes, dónde se alojan, qué condiciones favorecen su presencia y cuál es el punto exacto en el que conviene actuar.',
      'El monitoreo es la parte que más suele subestimarse. Cuando se registra la actividad de forma periódica, la intervención se vuelve más precisa, menos invasiva y más económica. Un diagnóstico bien hecho permite ajustar las trampas, revisar los focos de entrada y disminuir la dependencia de tratamientos químicos.',
      'En términos prácticos, esto significa mayor seguridad para el personal, menor riesgo para la producción y un resultado más sostenible en el tiempo. En Valtus, proponemos soluciones basadas en evidencia, no en respuestas improvisadas.'
    ]
  },
  {
    titulo: 'Limpieza de tanques: frecuencia, normativa y análisis de agua',
    fecha: '2026-06-15',
    categoria: 'Higiene y agua',
    extracto: 'La higiene semestral de tanques es obligatoria en la mayoría de los municipios. Repasamos el protocolo y la documentación exigida.',
    imagen: '/assets/images/blog/limpieza-de-tanques.jpg',
    alt: 'Operario realizando el lavado de un tanque de agua',
    contenido: [
      'La limpieza de tanques es una tarea que combina mantenimiento, salud pública y cumplimiento normativo. En muchos edificios y comercios, el almacenamiento del agua potable exige revisiones periódicas para evitar contaminación por biofilm, sedimentos o presencia de microorganismos.',
      'La frecuencia recomendada suele variar según el uso del sistema y la normativa local, pero el procedimiento suele incluir desagote, lavado, desinfección y control posterior con análisis de agua. La documentación del servicio es relevante porque prueba que se cumplió con la normativa y ayuda al usuario a llevar un registro claro.',
      'No se trata solo de “limpiar por limpiar”: la limpieza profesional permite prevenir fallas operativas y asegurar un agua segura para consumo humano.'
    ]
  },
  {
    titulo: 'Control de palomas sin daño animal: soluciones físicas efectivas',
    fecha: '2026-05-02',
    categoria: 'Control de aves',
    extracto: 'Redes, púas y sistemas de exclusión permiten proteger fachadas y evitar riesgos sanitarios sin recurrir a métodos letales.',
    imagen: '/assets/images/blog/manejo-integrado-de-plagas.jpg',
    alt: 'Palomas sobre una cornisa protegida con red de exclusión',
    contenido: [
      'El control de palomas tiene que enfocarse en la prevención del acceso a los lugares de descanso y nidificación. Cuando se resuelven los puntos de atracción y se reemplazan condiciones favorables por medidas de exclusión, la población tiende a disminuir sin necesidad de recurrir a métodos agresivos.',
      'Las redes, púas, barreras y sistemas de disuasión física permiten proteger fachadas, cornisas, techos y otras zonas críticas. Además, aportan una solución mucho más estable a largo plazo porque actúan sobre la causa del problema y no solo sobre el síntoma.',
      'En Valtus trabajamos con soluciones que priorizan la seguridad, la limpieza y la protección del entorno, cuidando la salud del edificio y las personas que lo utilizan.'
    ]
  },
  {
    titulo: 'Buenas prácticas para auditorías ambientales en edificios',
    fecha: '2026-04-18',
    categoria: 'Normativa',
    extracto: 'Qué documentar, cómo registrarlo y qué indicadores ayudan a sostener una gestión ambiental eficiente.',
    imagen: '/assets/images/blog/control-de-plagas-palomas.jpg',
    alt: 'Auditor revisando documentación ambiental en un edificio',
    contenido: [
      'Las auditorías ambientales no deberían verse como un trámite aislado, sino como una oportunidad para detectar puntos de mejora y reforzar la trazabilidad.',
      'Documentar procedimientos, registros de mantenimiento y acciones correctivas facilita no solo el control interno, sino también la relación con clientes, proveedores y organismos competentes.',
      'La clave está en diseñar un sistema que permita monitorear indicadores de forma simple y útil, en lugar de acumular papeles que nadie consulta.'
    ]
  },
  {
    titulo: 'Cómo prevenir biofilm y malos olores en instalaciones técnicas',
    fecha: '2026-03-12',
    categoria: 'Higiene y agua',
    extracto: 'Mantenimiento preventivo, limpieza y control del agua para evitar focos de contaminación en sistemas complejos.',
    imagen: '/assets/images/blog/limpieza-de-tanques.jpg',
    alt: 'Instalación técnica con signos de biofilm y olor',
    contenido: [
      'El biofilm se forma cuando la humedad, la materia orgánica y la falta de mantenimiento se combinan. Se vuelve visible en superficies y conductos y puede afectar tanto la calidad del agua como la operación del sistema.',
      'Una estrategia preventiva incluye revisión periódica, limpieza mecánica y sanitización, además de controlar variables como temperatura y flujo. Así se reducen los riesgos sanitarios y aumenta la vida útil de la infraestructura.',
      'Cuando el problema se aborda a tiempo, el costo de la corrección es mucho menor que el de una intervención emergente.'
    ]
  },
  {
    titulo: 'Protección ignífuga en estructuras de madera y textiles',
    fecha: '2026-02-05',
    categoria: 'Ignifugado',
    extracto: 'Revisamos qué criterios se toman en cuenta para aplicar tratamientos ignífugos con resultados confiables.',
    imagen: '/assets/images/blog/manejo-integrado-de-plagas.jpg',
    alt: 'Aplicación de tratamiento ignífugo en estructura de madera',
    contenido: [
      'La protección ignífuga es especialmente importante en ambientes con riesgo alto o materiales inflamables. El tratamiento no debe pensarse como un “extra”, sino como parte del diseño de seguridad.',
      'La elección del producto y la forma de aplicación dependen del material, la superficie, la normativa vigente y las condiciones de uso. Un criterio técnico bien aplicado mejora la resistencia del elemento y reduce el riesgo de propagación.',
      'La clave está en compatibilizar seguridad, mantenimiento y cumplimiento legal con una ejecución profesional.'
    ]
  }
];

function slugify(text){
  return String(text || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function formatearFecha(fechaString){
  var meses = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
  var d = new Date(fechaString + 'T00:00:00');
  return d.getDate() + ' ' + meses[d.getMonth()] + ' ' + d.getFullYear();
}

function obtenerListaCategorias(){
  return Array.from(new Set(articulos.map(function(item){ return item.categoria; }))).sort();
}

function obtenerListaFechas(){
  return Array.from(new Set(articulos.map(function(item){ return item.fecha.slice(0, 7); }))).sort().reverse();
}

function obtenerArticulosOrdenados(orden){
  var lista = articulos.slice();

  lista.sort(function(a, b){
    var aDate = new Date(a.fecha + 'T00:00:00').getTime();
    var bDate = new Date(b.fecha + 'T00:00:00').getTime();
    return orden === 'asc' ? aDate - bDate : bDate - aDate;
  });

  return lista;
}

function obtenerArticulosFiltrados(){
  var params = new URLSearchParams(window.location.search);
  var categoria = params.get('categoria');
  var fecha = params.get('fecha');
  var lista = articulos.slice();

  if (categoria) {
    lista = lista.filter(function(item){ return slugify(item.categoria) === categoria; });
  }

  if (fecha) {
    lista = lista.filter(function(item){ return item.fecha.slice(0, 7) === fecha; });
  }

  var ordenSelect = document.getElementById('ordenBlog');
  var orden = ordenSelect ? ordenSelect.value : 'desc';
  return obtenerArticulosOrdenados(orden).filter(function(item){
    var okCategoria = !categoria || slugify(item.categoria) === categoria;
    var okFecha = !fecha || item.fecha.slice(0, 7) === fecha;
    return okCategoria && okFecha;
  });
}

function renderBlogGrid(){
  var grid = document.getElementById('gridBlog');
  if (!grid) return;

  var lista = obtenerArticulosFiltrados();

  if (!lista.length) {
    grid.innerHTML = '<article class="post post--empty"><div class="post__cuerpo"><h3>No hay artículos para este filtro.</h3><p>Probá otra categoría o cambiá el orden de fecha.</p></div></article>';
    return;
  }

  grid.innerHTML = lista.map(function(item){
    var slug = slugify(item.titulo);
    return '<article class="post fade">' +
      '<img src="' + item.imagen + '" alt="' + item.alt + '" width="800" height="533" loading="lazy" decoding="async">' +
      '<div class="post__cuerpo">' +
        '<div class="post__topline"><span class="post__categoria">' + item.categoria + '</span><time class="post__fecha" datetime="' + item.fecha + '">' + formatearFecha(item.fecha) + '</time></div>' +
        '<h3>' + item.titulo + '</h3>' +
        '<p>' + item.extracto + '</p>' +
        '<a class="post__link" href="single-article.html?slug=' + slug + '">Leer más →</a>' +
      '</div></article>';
  }).join('');
}

function renderSidebarFilters(){
  var categoriesWrap = document.getElementById('sidebarCategories');
  var datesWrap = document.getElementById('sidebarDates');

  if (categoriesWrap) {
    categoriesWrap.innerHTML = ['all'].concat(obtenerListaCategorias()).map(function(categoria){
      var label = categoria === 'all' ? 'Todas' : categoria;
      var href = categoria === 'all' ? 'blog.html' : 'blog.html?categoria=' + slugify(categoria);
      return '<a href="' + href + '" class="sidebar-link' + (categoria === 'all' ? ' is-active' : '') + '">' + label + '</a>';
    }).join('');
  }

  if (datesWrap) {
    datesWrap.innerHTML = ['all'].concat(obtenerListaFechas()).map(function(fecha){
      var label = fecha === 'all' ? 'Todas' : formatearFecha(fecha + '-01');
      var href = fecha === 'all' ? 'blog.html' : 'blog.html?fecha=' + fecha;
      return '<a href="' + href + '" class="sidebar-link' + (fecha === 'all' ? ' is-active' : '') + '">' + label + '</a>';
    }).join('');
  }
}

function renderArticuloIndividual(){
  var contenedor = document.getElementById('articleContent');
  if (!contenedor) return;

  var params = new URLSearchParams(window.location.search);
  var slug = params.get('slug');
  var articulo = articulos.find(function(item){ return slugify(item.titulo) === slug; }) || articulos[0];

  contenedor.innerHTML = '<article class="article-post fade">' +
    '<div class="article-post__meta">' + formatearFecha(articulo.fecha) + '</div>' +
    '<h1>' + articulo.titulo + '</h1>' +
    '<p class="article-post__extracto">' + articulo.extracto + '</p>' +
    '<img src="' + articulo.imagen + '" alt="' + articulo.alt + '" class="article-post__image" width="1200" height="800">' +
    articulo.contenido.map(function(parrafo){
      return '<p>' + parrafo + '</p>';
    }).join('') +
    '<div class="article-post__acciones">' +
      '<a class="btn btn--primario" href="blog.html">Volver al blog</a>' +
      '<a class="btn btn--secundario btn--secundario-dark" href="index.html#contacto">Solicitar presupuesto</a>' +
    '</div>' +
  '</article>';
}

function renderBlogPage(){
  var ordenSelect = document.getElementById('ordenBlog');
  if (ordenSelect) {
    ordenSelect.addEventListener('change', function(){ renderBlogGrid(); });
  }

  var page = document.body.dataset.page;
  if (page === 'blog-single') {
    renderSidebarFilters();
    renderArticuloIndividual();
    return;
  }

  renderBlogGrid();
}

(function(){
  renderBlogPage();
})();

(function(){
  var elementos = document.querySelectorAll('.fade');
  if (!('IntersectionObserver' in window)) {
    elementos.forEach(function(el){ el.classList.add('visible'); });
    return;
  }

  var obs = new IntersectionObserver(function(entradas){
    entradas.forEach(function(e){
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  elementos.forEach(function(el){ obs.observe(el); });
})();

(function(){
  var form = document.getElementById('formContacto');
  var aviso = document.getElementById('aviso');

  if (!form) return;

  function mostrarError(campo, mensaje){
    var cont = campo.closest('.campo');
    cont.classList.toggle('invalido', !!mensaje);
    cont.querySelector('.error').textContent = mensaje || '';
    return !mensaje;
  }

  function validarCampo(campo){
    var v = campo.value.trim();
    switch(campo.id){
      case 'nombre':
        return mostrarError(campo, v.length < 3 ? 'Ingresá tu nombre completo.' : '');
      case 'email':
        return mostrarError(campo, /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(v) ? '' : 'Ingresá un email válido.');
      case 'telefono':
        return mostrarError(campo, /^[+\d][\d\s()-]{6,}$/.test(v) ? '' : 'Ingresá un teléfono válido.');
      case 'servicio':
        return mostrarError(campo, v ? '' : 'Elegí un servicio.');
      case 'mensaje':
        return mostrarError(campo, v.length < 10 ? 'Contanos un poco más (mínimo 10 caracteres).' : '');
      default:
        return true;
    }
  }

  var campos = ['nombre','email','telefono','servicio','mensaje'].map(function(id){
    return document.getElementById(id);
  });

  campos.forEach(function(c){
    if (!c) return;
    c.addEventListener('blur', function(){ validarCampo(c); });
    c.addEventListener('input', function(){
      if (c.closest('.campo').classList.contains('invalido')) validarCampo(c);
    });
  });

  form.addEventListener('submit', function(e){
    e.preventDefault();
    var ok = true;
    var primero = null;

    campos.forEach(function(c){
      if (!c) return;
      var valido = validarCampo(c);
      if (!valido && !primero) primero = c;
      ok = ok && valido;
    });

    if (!ok) {
      aviso.classList.remove('visible');
      if (primero) primero.focus();
      return;
    }

    aviso.classList.add('visible');
    form.reset();
  });
})();

var anio = document.getElementById('anio');
if (anio) {
  anio.textContent = new Date().getFullYear();
}
