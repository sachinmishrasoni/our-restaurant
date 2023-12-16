import React, { useEffect, useRef, useState } from 'react'
import { Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import Layout from '../LayoutWraper/Layout'
import Heading from '../HomePage/HomeSiblings/Heading';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import FaxIcon from '@mui/icons-material/Fax';
import EmailIcon from '@mui/icons-material/Email';
import EmailImg from '../../../Image/Email01.png'
import SendIcon from '@mui/icons-material/Send';
import FeedbackCompo from '../MenuPage/MenuSiblings/FeedbackComp'

const About = () => {

  const sections = useRef([]);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("section1");

  const listenToScroll = () => {
    // nav active when scroll
    const pageYOffset = window.pageYOffset + 200;
    let newActiveSection = null;
    sections.current.forEach((section) => {
      const sectionOffsetTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (pageYOffset >= sectionOffsetTop && pageYOffset < sectionOffsetTop + sectionHeight) {
        newActiveSection = section.id;
        // console.log(newActiveSection)
      }
    });
    setActiveSection(newActiveSection);


    // nav hide and when Scroll
    let hieghtToHidden = 150;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > hieghtToHidden) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    sections.current = document.querySelectorAll('[data-section]');

    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);

  // Small Contact Card Data
  const smcontcrddata = [
    {
      cardIcon: LocationOnIcon,
      cardHead: "Our Main Branch",
      cardDesc: "E/123 Karol Bagh Infront of HDFC Bank, New Delhi - 110005"
    },
    {
      cardIcon: CallIcon,
      cardHead: "Phone Number",
      cardDesc: `1800 2658 85, 1800 9851 00(Toll Free)`
    },
    {
      cardIcon: FaxIcon,
      cardHead: "Fax",
      cardDesc: "123456789"
    },
    {
      cardIcon: EmailIcon,
      cardHead: "E-mail",
      cardDesc: "ourresturentway@gmail.com"
    },
  ]
  // Small Contact Card
  const SmContCard = ({ data }) => {
    return (
      <>
        <Paper
          sx={{
            // maxWidth: '275px',
            minHeight: '148px',
            maxHeight: '148px',
            padding: '10px',
            color: 'skyblue',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            backgroundColor: '#DDE6ED',
            transition: 'all 0.2s ease-in',
            '&:hover': {
              boxShadow: '1px 1px 10px white',
              transform: 'scale(1.1)',
              transition: 'all 0.2s ease-in'
            }
          }}>
          <data.cardIcon sx={{ fontSize: '4rem' }} />
          <Box sx={{ textAlign: 'center', color: '#212A3E' }}>
            <Typography variant='body1' fontWeight={600}>{data.cardHead}</Typography>
            <Typography variant='body2'>{data.cardDesc}</Typography>
          </Box>
        </Paper>
      </>
    );
  }


  return (
    <Layout>
      <Box sx={{ minHeight: '90vh', backgroundColor: 'black', color: 'white', padding: '0px 10px 0px 10px', }}>

        <Container disableGutters>
          {/* sm-nav when scroll */}
          {
            isVisible && (
              <Grid container id={'sm-nav'}>
                <Grid item xs={4} sm={4} lg={4}><a href="#about-us"><Button className={activeSection === 'about-us' ? 'active' : null} fullWidth >About</Button></a></Grid>
                <Grid item xs={4} sm={4} lg={4}><a href="#contact-us"><Button className={activeSection === 'contact-us' ? 'active' : null} fullWidth >Contact</Button></a></Grid>
                <Grid item xs={4} sm={4} lg={4}><a href="#review"><Button className={activeSection === 'review' ? 'active' : null} fullWidth >Review</Button></a></Grid>
              </Grid>
            )
          }


          {/* About Us */}
          <Box data-section id={'about-us'} sx={{ textAlign: 'justify' }} >
            <Heading headingName={'About us'} />

            <Typography color={'white'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, recusandae repudiandae ea voluptatem facilis sunt optio nam aperiam magnam laborum amet tempora totam eos tempore. Neque autem porro vero recusandae, earum dolorum! Tempore illo asperiores maxime blanditiis suscipit nemo minus similique esse voluptatum corporis magni vitae dolores atque consequatur voluptatibus, cum pariatur eius nesciunt numquam earum est praesentium enim. Deserunt nostrum beatae a corrupti. Cumque suscipit natus molestias accusamus veritatis qui hic vero temporibus facere aperiam, recusandae beatae voluptas excepturi asperiores modi, esse nobis incidunt. Error, repellendus harum accusamus ex fugiat, ipsa quos laboriosam deserunt adipisci perferendis culpa magni impedit!</Typography>
            <br />
            <Typography color={'white'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore similique soluta aliquam dolorem. Similique ex praesentium voluptates commodi repellat iure porro enim explicabo, vitae reiciendis voluptate ratione dolorem aliquam saepe aut animi, nam blanditiis fuga perferendis nesciunt sed quis, distinctio impedit. Natus commodi suscipit, odit sunt delectus laborum itaque sit accusamus eius reprehenderit provident? Sed pariatur, aliquam repudiandae magnam, architecto ea nesciunt tempora asperiores natus exercitationem dolorem. Reprehenderit omnis ipsam tempore consectetur et sequi quo nulla, aspernatur rem autem optio accusamus labore enim facilis eligendi odio dolores exercitationem. Facilis omnis dolore voluptate odit rem, sit possimus ab nihil, ipsa soluta blanditiis sunt laborum dicta sed ipsam illo consectetur iste? Ducimus possimus, veritatis illo perferendis labore magni optio earum officiis. Dolor deleniti alias, praesentium natus obcaecati molestiae, eius non accusamus esse minus quaerat iusto omnis, suscipit aut unde consectetur ex nihil modi porro dolorem voluptates? Error perferendis excepturi nostrum exercitationem voluptas.</Typography>

            <br />
            <Typography color={'white'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, recusandae repudiandae ea voluptatem facilis sunt optio nam aperiam magnam laborum amet tempora totam eos tempore. Neque autem porro vero recusandae, earum dolorum! Tempore illo asperiores maxime blanditiis suscipit nemo minus similique esse voluptatum corporis magni vitae dolores atque consequatur voluptatibus, cum pariatur eius nesciunt numquam earum est praesentium enim. Deserunt nostrum beatae a corrupti. Cumque suscipit natus molestias accusamus veritatis qui hic vero temporibus facere aperiam, recusandae beatae voluptas excepturi asperiores modi, esse nobis incidunt. Error, repellendus harum accusamus ex fugiat, ipsa quos laboriosam deserunt adipisci perferendis culpa magni impedit! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat blanditiis veniam voluptate ab impedit! Itaque iusto nisi exercitationem fuga odit officiis omnis, alias nemo, labore veritatis esse hic dolore deserunt minima soluta dolorem dolores optio! Aspernatur ducimus accusamus eveniet nobis dolores beatae magnam earum, temporibus quisquam aliquam praesentium aliquid. Id.</Typography>
          </Box>

          {/* Contact Us */}
          <Box data-section id={'contact-us'} >
            <Heading headingName={'Contact Us'} />
            <Paper sx={{ backgroundColor: '#DDE6ED', marginBottom: '25px', cursor: 'pointer' }}>
              <Grid container >
                {/* Image */}
                <Grid item md={4} lg={4}>
                  <Box sx={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#212A3E',
                    padding: '25px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '4px'
                  }}>
                    <Box
                      component={'img'}
                      src={EmailImg}
                      height={150}
                      sx={{
                        '@media(maxWidth: 400px)': {
                          height: '12px'
                        }
                      }}
                    />
                    <Typography color={'white'} textAlign={'center'} pt={2}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil rem fugiat perferendis rerum excepturi quis et impedit optio accusantium esse!</Typography>
                  </Box>
                </Grid>

                {/* form  */}
                <Grid item md={8} lg={8}>

                  <Container
                    sx={{
                      margin: '25px 0 10px 0',
                    }}
                  >
                    <form action="#">
                      <Typography variant='h4' textAlign={'center'} fontWeight={'bold'} mb={1}>Contact Us</Typography>
                      <TextField label="Name" variant='outlined' fullWidth margin="dense" size='small' />
                      <TextField label="Email" variant='outlined' fullWidth margin="dense" size='small' />
                      <TextField
                        id="outlined-multiline-static"
                        label="Message"
                        multiline
                        rows={6}
                        variant="outlined"
                        fullWidth
                        margin="dense"
                        size='small'
                      />
                      <Button variant='outlined' endIcon={<SendIcon />} fullWidth>Send</Button>
                    </form>
                  </Container>
                </Grid>
              </Grid>
            </Paper>

            {/* Small Contact Card */}
            <Grid container spacing={1}  >
              {
                smcontcrddata.map((items, ind) => <Grid item xs={12} sm={6} md={3} key={ind}><SmContCard data={items} /></Grid>)
              }
            </Grid>

          </Box>

          {/* Review */}
          <Box data-section id={'review'} pb={5} >
            <Heading headingName={'Review'} />
            <FeedbackCompo />
          </Box>

        </Container>
      </Box>
    </Layout>
  )
}

export default About;