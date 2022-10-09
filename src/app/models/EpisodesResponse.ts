import { Character } from "./CharactersResponse";

export interface EpisodesResponse {
    info:    Info;
    results: Episode[];
}

export interface Info {
    count: number;
    pages: number;
    next:  string;
    prev:  string;
}

export interface Episode {
    id:         number;
    name:       string;
    air_date:   string;
    episode:    string;
    characters: Character[];
    url:        string;
    created:    Date;
}
