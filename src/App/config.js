export const STATUSES = [
  { key: undefined, name: 'TODO' },
  { key: 'yes', name: 'Yes' },
  { key: 'unsure', name: 'Unsure' },
  { key: 'no', name: 'No' },
  { key: 'wip', name: 'WIP' },
  { key: 'ignored', name: 'Ignored' }
]

export const TOPICS = [
  { key: undefined, name: '', name_en: 'All topics' },
  { key: 'nobody', name: '「沒有人」的島', name_en: 'Nobody’s island' },
  { key: 'federation', name: '島嶼大聯盟', name_en: 'Island’s federation' },
  { key: 'open', name: '大島開放', name_en: 'Open island' },
  {
    key: 'outside',
    name: '沒有島是局外島',
    name_en: 'No island is outside island'
  },
  { key: 'fourth', name: '第四個島', name_en: 'The fourth island' },
  { key: 'academia', name: '賢者之島', name_en: 'Academia Formosa' },
  { key: 'voice', name: '海海人聲', name_en: 'Voice of the islanders' }
]

export const FORMATS = [
  { key: undefined, name: '', name_en: 'All formats' },
  { key: 'talk', name: '演講', name_en: 'Talk' },
  {
    key: 'panel_60',
    name: '主題論壇 60 分鐘',
    name_en: 'Panel discussion 60 mins'
  },
  {
    key: 'panel_90',
    name: '主題論壇 90 分鐘',
    name_en: 'Panel discussion 90 mins'
  },
  {
    key: 'panel_120',
    name: '主題論壇 120 分鐘',
    name_en: 'Panel discussion 120 mins'
  },
  { key: 'workshop_60', name: '工作坊 60 分鐘', name_en: 'Workshop 60 mins' },
  { key: 'workshop_90', name: '工作坊 90 分鐘', name_en: 'Workshop 90 mins' },
  { key: 'workshop_120', name: '工作坊 120 分鐘', name_en: 'Workshop 120 mins' }
]

export const FACETS = [
  { key: undefined, name: '', name_en: 'All facets' },
  { key: 'achievement', name: '專案成果', name_en: 'Project achievement' },
  { key: 'impact', name: '專案影響力', name_en: 'Project impact' },
  { key: 'knowledge', name: '知識分享', name_en: 'Knowledge sharing' },
  { key: 'misc', name: '其他', name_en: 'Misc' }
]

export const HIGHLIGHTS = [
  { key: undefined, name: '', name_en: 'All highlights' },
  { key: 'localization', name: '台灣、東南亞、東亞', name_en: 'Localization' },
  { key: 'gender', name: '性別均衡', name_en: 'Gender balance' },
  { key: 'area', name: '地域均衡', name_en: 'Area balance' },
  { key: 'misc', name: '其他', name_en: 'Misc' }
]

export const LICENSES = [
  { key: undefined, name: '', name_en: 'All licenses' },
  {
    key: 'everything_open',
    icon: 'check',
    color: 'green',
    name: '演講紀錄與投影片皆開放授權',
    name_en: 'Everything open licensed'
  },
  {
    key: 'presentation_open',
    icon: 'warning sign',
    color: 'yellow',
    name: '演講紀錄開放授權',
    name_en: 'Only presentation open licensed'
  },
  {
    key: 'slides_open',
    icon: 'warning sign',
    color: 'yellow',
    name: '投影片開放授權',
    name_en: 'Only slides open licensed'
  },
  {
    key: 'unlicensed',
    icon: 'minus circle',
    color: 'red',
    name: '未開放授權',
    name_en: 'Unlicensed'
  }
]
