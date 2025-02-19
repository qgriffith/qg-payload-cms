import * as migration_20250219_175325 from './20250219_175325'
import * as migration_20250219_180440 from './20250219_180440'

export const migrations = [
  {
    up: migration_20250219_175325.up,
    down: migration_20250219_175325.down,
    name: '20250219_175325',
  },
  {
    up: migration_20250219_180440.up,
    down: migration_20250219_180440.down,
    name: '20250219_180440',
  },
]
