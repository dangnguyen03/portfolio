import { Octokit } from '@octokit/rest'

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

export async function getReadmeContent(owner: string, repo: string, path: string = ''): Promise<string> {
  try {
    const response = await octokit.repos.getContent({
      owner,
      repo,
      path: path ? `${path}/README.md` : 'README.md',
    })

    if (Array.isArray(response.data) || !('content' in response.data)) {
      throw new Error('README not found')
    }

    const content = Buffer.from(response.data.content, 'base64').toString('utf-8')
    return content
  } catch (error) {
    console.error('Error fetching README:', error)
    return ''
  }
}

export async function getRepositories(username: string): Promise<any[]> {
  try {
    const response = await octokit.repos.listForUser({
      username,
      sort: 'updated',
      direction: 'desc',
    })
    return response.data
  } catch (error) {
    console.error('Error fetching repositories:', error)
    return []
  }
}

