interface Film {
    episode_id: number; title: string; opening_crawl: string
}

export interface Films extends Array<Film>{}