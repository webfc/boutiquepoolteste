USE [wappateste]
GO
/****** Object:  Table [dbo].[Cadastros]    Script Date: 08/08/2018 22:29:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cadastros](
	[IdCadastro] [uniqueidentifier] NOT NULL,
	[Nome] [nvarchar](max) NOT NULL,
	[Email] [nvarchar](max) NOT NULL,
	[Profissao] [nvarchar](max) NOT NULL,
	[DataNascimento] [datetime2](7) NOT NULL,
	[Desempregado] [bit] NOT NULL,
 CONSTRAINT [PK_Cadastros] PRIMARY KEY CLUSTERED 
(
	[IdCadastro] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
