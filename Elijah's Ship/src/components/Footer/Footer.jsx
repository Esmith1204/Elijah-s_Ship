import React from 'react';
import image from '../../assets/my_face_asset.png';
import linkedin from '../../assets/linkedin.png';
import tiktok from '../../assets/tiktok.png';
import github from '../../assets/github.png';
import instagram from '../../assets/instagram.png';



export default function Footer() {
    return (
        <footer className="footer footer-horizontal footer-center bg-primary text-primary-content p-1">
            <aside>
                <img
                    src={image}
                    alt="Elijah's Ship image"
                    width={150}
                    height={150}
                    className="rounded-full"
                />
                <p className="font-bold">
                Elijah's Ship
                <br />
                Inspired by Sanji and One Piece
                </p>
                <p> © Elijah Smith. {new Date().getFullYear()} - All right reserved.</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                <a
                    href="https://www.linkedin.com/in/elijah-smith-71319429a/"
                    className='transition duration-300 ease-in-out hover:scale-110'
                >
                    <img
                        src={linkedin}
                        alt="Elijah's Ship image"
                        width={30}
                        height={30}
                        className="rounded-full"
                    />
                </a>
                <a
                    href="https://github.com/Esmith1204"
                    className='transition duration-300 ease-in-out hover:scale-110'
                >
                    <img
                        src={github}
                        alt="Elijah's Ship image"
                        width={35}
                        height={35}
                        className="rounded-full"
                    />
                </a>
                <a
                    href="https://www.tiktok.com/@swrd.fsh"
                    className='transition duration-300 ease-in-out hover:scale-110'
                >
                    <img
                        src={tiktok}
                        alt="Elijah's Ship image"
                        width={32}
                        height={32}
                        className="rounded-full"
                    />
                </a>
                <a
                    href="https://www.instagram.com/elijah._s/"
                    className='transition duration-300 ease-in-out hover:scale-110'
                >    
                    <img
                        src={instagram}
                        alt="Elijah's Ship image"
                        width={35}
                        height={35}
                        className="rounded-full"
                    />
                </a>
                </div>
            </nav>
        </footer>
    );
}
