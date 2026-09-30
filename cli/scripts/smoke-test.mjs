#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.join(__dirname, '..', '..')

let failures = 0
function check(label, ok) {
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${label}`)
  if (!ok) failures += 1
}

// 1. JSON manifests parse.
for (const rel of ['package.json', 'plugin.json', '.claude-plugin/plugin.json', '.claude-plugin/marketplace.json']) {
  const file = path.join(repoRoot, rel)
  try {
    JSON.parse(fs.readFileSync(file, 'utf8'))
    check(`valid JSON: ${rel}`, true)
  } catch (error) {
    check(`valid JSON: ${rel} (${error.message})`, false)
  }
}

// 2. The expected hybrid skills exist.
const expected = ['prd', 'prd-anti-slop', 'prd-design']
for (const name of expected) {
  const file = path.join(repoRoot, 'skills', name, 'SKILL.md')
  check(`skill present: ${name}`, fs.existsSync(file))
}

// 3. The plugin manifest points at the skills directory.
try {
  const plugin = JSON.parse(fs.readFileSync(path.join(repoRoot, '.claude-plugin', 'plugin.json'), 'utf8'))
  check('plugin.json exposes ./skills/', Array.isArray(plugin.skills) && plugin.skills.includes('./skills/'))
} catch {
  check('plugin.json exposes ./skills/', false)
}

console.log(`\n${failures === 0 ? 'All checks passed.' : `${failures} check(s) failed.`}`)
process.exit(failures === 0 ? 0 : 1)
