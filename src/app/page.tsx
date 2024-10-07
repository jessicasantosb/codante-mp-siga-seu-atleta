import db from '@/prisma/db';

export default async function Home() {
  const sports = await db.sport.findMany();  

  return (
    <>
      <h1>Siga seu atleta!</h1>
      {sports.map((sport) => (
        <h4 key={sport.id}>{sport.name}</h4>
      ))}
    </>
  );
}
