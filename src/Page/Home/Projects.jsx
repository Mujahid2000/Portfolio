import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
       <div className='mt-10 max-w-[1800px] mx-auto'>
         <h1 className='text-center font-mono text-3xl'>Projects</h1>
            <div className='mt-10 ml-4 gap-4 grid grid-cols-1 lg:grid-cols-3 lg:mx-52'>
                {/* card1 */}
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
                
                {/* card2 */}
                <Card sx={{ maxWidth: 345, padding:1}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://i.ibb.co/bNqyjgZ/Web-capture-11-12-2023-22931-worried-horn-surge-sh.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: 'monospace'}}>
            Fitness Center
          </Typography>
          
        </CardContent>
      </CardActionArea>
        <CardActions>
        <Button href='https://gigantic-scarf.surge.sh/' variant="contained" color="primary" style={{ marginRight: '10px' }} sx={{fontFamily: 'monospace'}}>
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