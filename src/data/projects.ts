export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  images: string[];
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Магазин Брендовой Одежды',
    category: 'Full Stack Разработка',
    description: 'Полноценная e-commerce платформа для продажи фирменной одежды. Бэкенд полностью реализован на Spring Framework, обеспечивая высокую производительность и безопасность. Фронтенд включает в себя продвинутую систему метрик, кастомный аналитический дашборд и мощную административную панель. Реализована микросервисная архитектура с использованием Docker и Kubernetes для масштабируемости.',
    images: [
      'portfolio/projects/ecommerce-1.jpg',
      'portfolio/projects/ecommerce-2.jpg',
      'portfolio/projects/ecommerce-3.jpg',
      'portfolio/projects/ecommerce-4.jpg'
    ],
    link: '#'
  },
  {
    id: 2,
    title: 'Aniplexity - Аниме Стриминг Платформа',
    category: 'Микросервисная Архитектура',
    description: 'Масштабируемая платформа для просмотра аниме, построенная на микросервисной архитектуре Spring Boot. Система интегрирована с базой данных Kodik через специализированный parser-service для автоматического обновления контента. Архитектура включает auth-service (JWT безопасность), anime-service (управление каталогом), comment-service (социальное взаимодействие), upload-avatar-service (медиа-менеджмент) и stats-service (аналитика). Все сервисы оркестрируются через gateway-service. В качестве хранилищ используются PostgreSQL для надежного хранения данных и Redis для кэширования высоконагруженных запросов.',
    images: [
      'portfolio/projects/aniplexity-1.png',
      'portfolio/projects/aniplexity-2.png',
      'portfolio/projects/aniplexity-3.png',
      'portfolio/projects/aniplexity-4.png'
    ],
    link: '#'
  },
  {
    id: 3,
    title: 'LiteAnarchy - Игровой Портал',
    category: 'GameDev Web Platform',
    description: 'Сайт для Minecraft сервера LiteAnarchy. Сайт предоставляет пользователям удобный интерфейс для покупки привилегий, кейсов и игровой валюты. Реализована интеграция с игровым сервером для мгновенной выдачи товаров. Дизайн выполнен в стилистике проекта с акцентом на удобство навигации и визуальную привлекательность. Включает в себя систему мониторинга онлайна, рейтинги игроков и информационный раздел FAQ.',
    images: [
      'portfolio/projects/anarchy.png'
    ],
    link: '#'
  }
];
