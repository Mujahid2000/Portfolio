import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
       <div className='mt-10 place-items-center max-w-[1550px] mx-auto'>
         <h1 className='text-center font-bold font-mono text-3xl'>Projects</h1>
            <div className='mt-10  gap-4 place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 mx-auto items-center'>
              {/* card1 */}
              <Card sx={{ maxWidth: 345, padding:1}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://i.ibb.co/KmQ9SJy/Screenshot-15-4-2024-11351-streme-eight-vercel-app.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: 'monospace'}}>
            Streme
          </Typography>
          
        </CardContent>
      </CardActionArea>
        <CardActions>
        <Button href='https://streme-eight.vercel.app/' variant="contained" color="primary" style={{ marginRight: '10px' }} sx={{fontFamily: 'monospace'}}>
        Live Link
      </Button>
      <Link to={'/project4'}>
      <Button variant="contained" color="secondary" sx={{fontFamily: 'monospace'}}>
        Project Details
      </Button>
      </Link>
      </CardActions>
                </Card>
              {/* card2 */}
              <Card sx={{ maxWidth: 345, padding:1}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://i.ibb.co/KmyD6s4/23456.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: 'monospace'}}>
            Fitness Center
          </Typography>
          
        </CardContent>
      </CardActionArea>
        <CardActions>
        <Button href='https://oafish-shoe.surge.sh/' variant="contained" color="primary" style={{ marginRight: '10px' }} sx={{fontFamily: 'monospace'}}>
        Live Link
      </Button>
      <Link to={'/project2'}>
      <Button variant="contained" color="secondary" sx={{fontFamily: 'monospace'}}>
        Project Details
      </Button>
      </Link>
      </CardActions>
                </Card>
                {/* card3 */}
                <Card sx={{ maxWidth: 345, padding:1}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://i.ibb.co/tM67C77/Web-capture-11-12-2023-11418-dry-whip-surge-sh.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: 'monospace'}}>
            Taskla
          </Typography>
          
        </CardContent>
      </CardActionArea>
        <CardActions>
        <Button href='https://childlike-dogs.surge.sh/' variant="contained" color="primary" style={{ marginRight: '10px' }} sx={{fontFamily: 'monospace'}}>
        Live Link
      </Button>
      <Link to={'/project1'}>
      <Button variant="contained" color="secondary" sx={{fontFamily: 'monospace'}}>
        Project Details
      </Button>
      </Link>
      </CardActions>
                </Card>
                
                
                {/* card4 */}
                <Card sx={{ maxWidth: 345, padding:1}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://i.ibb.co/kBZ7H8k/Web-capture-11-12-2023-155625-pumped-side-surge-sh.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: 'monospace'}}>
          Car Deals
          </Typography>
          
        </CardContent>
      </CardActionArea>
        <CardActions>
        <Button sx={{fontFamily: 'monospace'}} href='https://pumped-side.surge.sh/' variant="contained" color="primary" style={{ marginRight: '10px' }}>
        Live Link
      </Button>
      <Link to={'/project3'}>
      <Button variant="contained" color="secondary" sx={{fontFamily: 'monospace'}}>
        Project Details
      </Button>
      </Link>
      </CardActions>
                </Card>

            </div>
       </div>
    );
};

export default Projects;