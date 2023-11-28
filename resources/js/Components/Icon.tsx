type IconNameType = 'cart' | 'plus' | 'minus';

const IconVariant = {
    white: '#fff',
    black: '#000',
};

type IconVariantType = keyof typeof IconVariant;

type IconProps = {
    name: IconNameType;
    variant?: IconVariantType;
};

export default function Icon({ name, variant = 'black' }: IconProps) {
    switch (name) {
        case 'cart':
            return (
                <svg
                    width='23'
                    height='23'
                    viewBox='0 0 21 21'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M9.46968 1.52385L7.41254 3.80956L4.90166 6.54867L4.22861 5.93171L6.73806 3.19413L8.79102 0.913055L9.46968 1.52385Z'
                        fill={IconVariant[variant]}
                    />
                    <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M11.5303 1.52385L13.5874 3.80956L16.0983 6.54867L16.7714 5.93171L14.2619 3.19413L12.2089 0.913055L11.5303 1.52385Z'
                        fill={IconVariant[variant]}
                    />
                    <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M0 5.78366L2.73913 19.4793H18.2609L21 5.78366H0ZM1.11373 6.6967L3.48765 18.5663H17.5124L19.8863 6.6967H1.11373Z'
                        fill={IconVariant[variant]}
                    />
                </svg>
            );
        case 'minus':
            return (
                <svg
                    width='15'
                    height='15'
                    viewBox='0 0 15 15'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <g clip-path='url(#clip0_1_584)'>
                        <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M14.6304 7.98021H0V6.65018H14.6304V7.98021Z'
                            fill='black'
                        />
                    </g>
                    <defs>
                        <clipPath id='clip0_1_584'>
                            <rect
                                width='14.6304'
                                height='14.6304'
                                fill='white'
                            />
                        </clipPath>
                    </defs>
                </svg>
            );
        case 'plus':
            return (
                <svg
                    width='15'
                    height='15'
                    viewBox='0 0 15 15'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <g clip-path='url(#clip0_1_581)'>
                        <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M14.6304 7.98021H0V6.65018H14.6304V7.98021Z'
                            fill='black'
                        />
                        <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M6.65016 14.6304L6.65016 -5.81376e-08L7.98019 0L7.98019 14.6304L6.65016 14.6304Z'
                            fill='black'
                        />
                    </g>
                    <defs>
                        <clipPath id='clip0_1_581'>
                            <rect
                                width='14.6304'
                                height='14.6304'
                                fill='white'
                            />
                        </clipPath>
                    </defs>
                </svg>
            );
    }
}
