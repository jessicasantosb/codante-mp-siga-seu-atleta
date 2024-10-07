import { GoPerson } from 'react-icons/go';

import {
  Avatar,
  AvatarImage,
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui';
import { AthleteWithSport, formatFollowersCount } from '@/lib';

interface AthleteCardProps {
  athlete: AthleteWithSport;
}

export function AthleteCard({ athlete }: AthleteCardProps) {
  return (
    <Card className='h-full group'>
      <CardHeader className='p-4 flex items-center justify-between flex-row gap-2 overflow-hidden'>
        <div className='flex items-center space-x-4 truncate'>
          <Avatar className='w-14 h-14 border-2 border-black'>
            <AvatarImage
              src={athlete.instagramImageUrl!}
              alt='Avatar do Atleta'
            />
          </Avatar>
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
    </Card>
  );
}
