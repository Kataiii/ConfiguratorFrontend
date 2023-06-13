import { ConfigProvider, Spin } from "antd";

const LoadingPage = () => {
    return(
        <div style={{width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <ConfigProvider
                theme={{
                token: {
                    colorPrimary: '#E73C3C',
                },
                }}
            >
                <Spin tip="Загрузка..." size="large">
                            <div className="content" />
                        </Spin>
            </ConfigProvider>
            
        </div>
    )
}

export default LoadingPage;