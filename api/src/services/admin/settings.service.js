const { Setting } = require('../../models')

const getAll = async () => {
  const rows = await Setting.findAll()
  const settings = {}
  rows.forEach((row) => {
    settings[row.key] = row.value
  })
  return settings
}

const get = async (key) => {
  const setting = await Setting.findOne({ where: { key } })
  return setting ? setting.value : null
}

const set = async (key, value) => {
  const [setting] = await Setting.upsert({ key, value })
  return setting
}

// Keys que el admin puede editar. `billing_status`, `changes_this_month` y
// `monthly_changes_limit` quedan fuera: son controladas por App Resuelve.
const EDITABLE_KEYS = [
  'business_name',
  'business_slogan',
  'business_description',
  'logo_url',
  'favicon_url',
  'whatsapp_number',
  'email',
  'address',
  'business_hours',
  'instagram',
  'facebook',
  'tiktok',
  'youtube',
  'store_status',
]

const STORE_STATUS_VALUES = ['active', 'draft', 'maintenance']

const setBulk = async (data) => {
  // data = { business_name: '...', primary_color: '#...', ... }
  const entries = []
  for (const [key, value] of Object.entries(data)) {
    if (!EDITABLE_KEYS.includes(key)) continue
    if (key === 'store_status' && !STORE_STATUS_VALUES.includes(value)) {
      throw Object.assign(new Error('Estado de tienda inválido'), { status: 400 })
    }
    entries.push({ key, value })
  }

  await Setting.bulkCreate(entries, {
    updateOnDuplicate: ['value'],
  })
  return getAll()
}

module.exports = { getAll, get, set, setBulk }
