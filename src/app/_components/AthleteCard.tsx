import Link from 'next/link';
import { GoPerson } from 'react-icons/go';
import { RxInstagramLogo } from 'react-icons/rx';

import {
  Avatar,
  AvatarImage,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui';
import { AthleteWithSport } from '@/lib/athletes';
import { extractInstagramAccount, formatFollowersCount } from '@/lib/instagram';

interface AthleteCardProps {
  athlete: AthleteWithSport;
}

export function AthleteCard({ athlete }: AthleteCardProps) {
  return (
    <Card className='h-full group'>
      <CardHeader className='p-4 flex items-center justify-between flex-row gap-2 overflow-hidden'>
        <div className='flex items-center space-x-4 truncate'>
          {athlete.instagramImageUrl && (
            <Avatar className='w-14 h-14 border-2 border-black'>
              <AvatarImage
                src={athlete.instagramImageUrl}
                alt='Avatar do Atleta'
              />
            </Avatar>
          )}
          <div className='truncate'>
            <CardTitle className='text-lg font-bold truncate'>
              {athlete.instagramName}
            </CardTitle>
            <CardDescription className='text-sm truncate'>
              {athlete.sport.name}
            </CardDescription>
          </div>
        </div>

        <div className='font-medium flex items-center gap-1'>
          <GoPerson className='h-5 w-5' />
          {formatFollowersCount(athlete.instagramFollowersCount!)}
        </div>
      </CardHeader>

      <CardContent className='p-4 flex-grow text-sm text-gray-700 font-light'>
        <p className='min-h-[7.5em] leading-[1.5em]'>{athlete.instagramBio}</p>
      </CardContent>

      {athlete.instagramUrl && (
        <CardFooter className='flex items-center justify-between border-t p-4 text-sm'>
          <span className='w-[40%] font-bold truncate'>
            @{extractInstagramAccount(athlete.instagramUrl)}
          </span>
          <Link
            href={athlete.instagramUrl}
            prefetch={false}
            target='_blank'
            className='flex items-center space-x-1 text-blue-500'
          >
            <RxInstagramLogo className='w-4 h-4' />
            <span>Ver no Instagram</span>
          </Link>
        </CardFooter>
      )}
    </Card>
  );
}
