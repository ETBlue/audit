export const PROPOSAL_COUNT_PER_PAGE = 25

export const MAX_CONTENT_WIDTH = '1680px'

export const STATUSES = [
  { key: undefined, color: 'grey', icon: 'clipboard list', name: 'TODO' },
  { key: 'wip', color: 'grey', icon: 'hourglass half', name: 'WIP' },
  { key: 'skipped', color: 'grey', icon: 'step forward', name: 'Skipped' },
  { key: 'hellyes', color: 'green', icon: 'rocket', name: 'Hell YES' },
  { key: 'yes', color: 'green', icon: 'check', name: 'Yes' },
  { key: 'unsure', color: 'yellow', icon: 'question', name: 'Unsure' },
  { key: 'no', color: 'red', icon: 'ban', name: 'No' }
]

export const TOPICS = [
  { key: undefined, name: '', name_en: 'All topics' },
  {
    key: 'nobody',
    name: '社群 - 「沒有人」的島',
    name_en: 'Community - Nobody’s island'
  },
  {
    key: 'federation',
    name: '國際 - 島嶼大聯盟',
    name_en: 'International - Island’s federation'
  },
  {
    key: 'open',
    name: '開放文化 - 大島開放',
    name_en: 'Open culture - Open island'
  },
  {
    key: 'outside',
    name: '人權 - 沒有島是局外島',
    name_en: 'Human rights - No island is outside island'
  },
  {
    key: 'fourth',
    name: '媒體 - 第四個島',
    name_en: 'Media - The fourth island'
  },
  {
    key: 'academia',
    name: '學術 - 賢者之島',
    name_en: 'Acedamic - Academia Formosa'
  },
  {
    key: 'voice',
    name: '領域議題 - 海海人聲',
    name_en: 'Domain issues - Voice of the islanders'
  }
]

export const FORMAT_TYPES = [
  { key: undefined, icon: '', name: '', name_en: 'All formats' },
  { key: 'talk', icon: 'user', name: '演講', name_en: 'Talk' },
  {
    key: 'panel',
    icon: 'users',
    name: '主題論壇',
    name_en: 'Panel discussion'
  },
  {
    key: 'workshop',
    icon: 'hand paper',
    name: '工作坊',
    name_en: 'Workshop'
  }
]

export const FORMATS = [
  { key: undefined, icon: '', name: '', name_en: 'All formats' },
  { key: 'talk', icon: 'user', name: '演講', name_en: 'Talk' },
  {
    key: 'panel_60',
    icon: 'users',
    name: '主題論壇 60 分鐘',
    name_en: 'Panel discussion 60 mins'
  },
  {
    key: 'panel_90',
    icon: 'users',
    name: '主題論壇 90 分鐘',
    name_en: 'Panel discussion 90 mins'
  },
  {
    key: 'panel_120',
    icon: 'users',
    name: '主題論壇 120 分鐘',
    name_en: 'Panel discussion 120 mins'
  },
  {
    key: 'workshop_60',
    icon: 'hand paper',
    name: '工作坊 60 分鐘',
    name_en: 'Workshop 60 mins'
  },
  {
    key: 'workshop_90',
    icon: 'hand paper',
    name: '工作坊 90 分鐘',
    name_en: 'Workshop 90 mins'
  },
  {
    key: 'workshop_120',
    icon: 'hand paper',
    name: '工作坊 120 分鐘',
    name_en: 'Workshop 120 mins'
  }
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
    name: '僅演講紀錄開放授權',
    name_en: 'Only presentation open licensed'
  },
  {
    key: 'slides_open',
    icon: 'warning sign',
    color: 'yellow',
    name: '僅投影片開放授權',
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

export const FACETS = [
  { key: undefined, name: '', name_en: 'All facets' },
  {
    key: 'achievement',
    name: '專案成果與影響力',
    name_en: 'Project achievement'
  },
  { key: 'experience', name: '專案經驗談', name_en: 'Project experience' },
  { key: 'research', name: '分析與研究', name_en: 'Research' },
  { key: 'resource', name: '資源介紹', name_en: 'Resource' },
  { key: 'plan', name: '行動計畫', name_en: 'Plan' },
  { key: 'tutorial', name: '實務教學', name_en: 'Tutorial' },
  { key: 'taste', name: '方法體驗或角色扮演', name_en: 'Taste' },
  { key: 'discussion', name: '議題討論', name_en: 'Discussion' },
  { key: 'facet_misc', name: '其他面向', name_en: 'Other facets' }
]

export const HIGHLIGHTS = [
  { key: undefined, name: '', name_en: 'All highlights' },
  { key: 'localization', name: '台灣、東南亞、東亞', name_en: 'Localization' },
  { key: 'gender', name: '性別均衡', name_en: 'Gender balance' },
  { key: 'area', name: '地域均衡', name_en: 'Area balance' },
  { key: 'highlight_misc', name: '其他加分條件', name_en: 'Other highlights' }
]
