import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.join(__dirname, '..', '..')
const skillsDir = path.join(repoRoot, 'skills')

// A shipped skill must not tell the agent to download the rest of its own instructions.
const RUNTIME_URL = /https?:\/\/raw\.githubusercontent\.com/

const skills = fs
  .readdirSync(skillsDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)

if (skills.length === 0) {
  throw new Error('no skills found in skills/')
}

for (const name of skills) {
  const file = path.join(skillsDir, name, 'SKILL.md')
  if (!fs.existsSync(file)) {
    throw new Error(`${name}: missing SKILL.md`)
  }
  const body = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n')
  if (!/^name:/m.test(body)) {
    throw new Error(`${name}: SKILL.md is missing a name frontmatter field`)
  }
  if (!/^description:/m.test(body)) {
    throw new Error(`${name}: SKILL.md is missing a description frontmatter field`)
  }
  if (RUNTIME_URL.test(body)) {
    throw new Error(`${name}: SKILL.md carries a runtime download URL; remove it`)
  }
  console.log(`ok ${name}`)
}

console.log(`\nValidated ${skills.length} skills.`)
