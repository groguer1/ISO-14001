window.MODULE_TITLE = "Implementa tu SGA";
window.SLIDES = [
  { type: 'portada', eyebrow: 'Módulo 11 de 11 — Proyecto Final', title: 'Implementa tu SGA',
    intro: 'Es el momento de aplicar todo lo aprendido. En este proyecto final diseñarás un Sistema de Gestión Ambiental básico para una organización real o ficticia, cubriendo desde el alcance hasta el control operacional y la revisión por la dirección.',
    meta: ['⏱ 3,5 horas', '🎓 Certificado de finalización', '📋 SGA completo exportable'] },
  { type: 'callout', variant: 'info', label: 'Cómo funciona este proyecto',
    html: '<p>Elige una organización, completa los campos de cada sección aplicando los conocimientos del curso, y al finalizar recibirás tu certificado de finalización y podrás exportar tu SGA en PDF. No hay respuestas incorrectas: lo que importa es que las respuestas sean coherentes y específicas para la organización elegida.</p>' },
  { type: 'empresas' },
  { type: 'proyecto', num: 1, title: '🎯 Alcance y política ambiental', campos: [
    { id: 'p1_alcance', label: 'Declaración de alcance del SGA', placeholder: 'Ejemplo: El SGA aplica a las instalaciones de producción y almacenamiento de la fábrica textil, incluyendo los procesos de teñido, confección y logística...', hint: 'Incluye: qué actividades, instalaciones y ubicaciones abarca el sistema.' },
    { id: 'p1_politica', label: 'Redacta la política ambiental de tu organización', placeholder: 'En [organización], nuestro compromiso es prevenir la contaminación y reducir nuestro impacto ambiental mediante...', minHeight: 110, hint: 'Debe incluir compromiso de cumplimiento legal, prevención de la contaminación y mejora continua.' }
  ]},
  { type: 'proyecto', num: 2, title: '🌍 Aspectos, impactos y requisitos legales', campos: [
    { id: 'p2_aspectos', label: 'Identifica 3 aspectos ambientales significativos y su impacto asociado', placeholder: 'ASPECTO 1: Consumo de agua en el proceso de teñido → IMPACTO: Agotamiento del recurso hídrico local\nASPECTO 2: ...', minHeight: 120 },
    { id: 'p2_legal', label: '¿Qué requisitos legales ambientales aplican a tu organización?', placeholder: 'Autorización Ambiental Integrada (AAI), límites de vertido de aguas residuales, normativa de gestión de residuos peligrosos (tintes y disolventes)...' }
  ]},
  { type: 'proyecto', num: 3, title: '📋 Objetivos y control operacional', campos: [
    { id: 'p3_objetivos', label: 'Define 2 objetivos ambientales SMART', placeholder: 'OBJETIVO 1: Reducir el consumo de agua\nIndicador: m³/kg de tejido teñido · Meta: -15% respecto a 2025 · Responsable: Responsable de Producción · Fecha: 31/12/2026\n\nOBJETIVO 2: ...', minHeight: 130 },
    { id: 'p3_control', label: '¿Qué controles operacionales son críticos en tu proceso principal?', placeholder: 'Dosificación controlada de tintes y químicos, mantenimiento preventivo de la depuradora, inspección de tanques de almacenamiento, formación en manejo de residuos peligrosos...' }
  ]},
  { type: 'proyecto', num: 4, title: '🚨 Preparación ante emergencias ambientales', campos: [
    { id: 'p4_emergencias', label: 'Describe un escenario de emergencia ambiental y el plan de respuesta', placeholder: 'ESCENARIO: Derrame de colorantes/disolventes en zona de almacenamiento\nRespuesta inmediata: activar contención secundaria, avisar al responsable de turno...\nMedios disponibles: kit de derrames, formación del personal, simulacros anuales...', minHeight: 140 }
  ]},
  { type: 'proyecto', num: 5, title: '📊 Desempeño, auditoría y revisión', campos: [
    { id: 'p5_kpis', label: 'Define 3 indicadores de desempeño ambiental', placeholder: 'Intensidad hídrica (m³/unidad producida) · % de residuos valorizados frente a vertedero · Tasa de cumplimiento legal ambiental (%)', minHeight: 100 },
    { id: 'p5_auditoria', label: 'Plan de auditoría interna: alcance, frecuencia y auditor', placeholder: 'Frecuencia: anual. Alcance: cláusulas 4-10 + aspectos significativos. Auditor: independiente del área auditada.' },
    { id: 'p5_revision', label: '¿Qué se revisará en la revisión por la dirección y con qué frecuencia?', placeholder: 'Revisión semestral: desempeño ambiental frente a objetivos, cumplimiento legal, resultados de auditorías, NC y acciones correctivas, oportunidades de mejora.' }
  ]},
  { type: 'evaluar' },
  { type: 'certificado' }
];
