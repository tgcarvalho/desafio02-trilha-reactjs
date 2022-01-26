import { Button } from "./Button";

type SideBarProps = {
  genres: Array<{
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }>
  activeGenreId: number
  selectedGenreId: (id: number) => void
}

export function SideBar({genres, activeGenreId, selectedGenreId}: SideBarProps) {
  return (
    <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => selectedGenreId(genre.id)}
          selected={activeGenreId === genre.id}
        />
      ))}
    </div>
  </nav>
  )
}